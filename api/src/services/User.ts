import { Errors } from 'typescript-rest';
import { v1 as uuidv1 } from 'uuid';

import dto from '@dto';
import utils from '@utils';
import * as apiResponses from '@typing/apiResponses';

import Review from '@database/entities/Review.entity';
import Company from '@database/entities/Company.entity';

import UserManager from '@database/managers/UserManager';
import CompanyManager from '@database/managers/CompanyManager';

import logger from '@logging/Logger';
import MailService from './Mail';

/**
 * Service in charge of registration and managing user data.
 */
export default class UserService {
  @utils.dbErrorDefaultReactor({ except: [], logger })
  public async checkIsUserRegistered(profileIdDto: dto.CheckIsUserRegisteredDto)
    : Promise<apiResponses.ICheckIsUserRegisteredResponseDto> {
    return { isRegistered: !!await UserManager.getUser(profileIdDto.profileId) };
  }

  @utils.dbErrorDefaultReactor({ except: [], logger })
  public async checkIsUserConfirmed(profileIdDto: dto.CheckIsUserConfirmedDto)
    : Promise<apiResponses.ICheckIsUserConfirmedResponseDto> {
    // Making confirmation code null is to be considered the user is registered.
    return {
      isConfirmed: (await UserManager.getUser(profileIdDto.profileId))?.confirmationCode === null
    };
  }

  /**
   * Save user info and send email to confirm.
   */
  public async prepareUser(profileDto: dto.PrepareUserDto)
    : Promise<apiResponses.IPrepareUserResponseDto> {
    const confirmationCode = uuidv1();

    // Save the user.
    await this.saveUser(profileDto, confirmationCode);

    // Send the confirmation code.
    try {
      await MailService.sendConfirmationMail(profileDto.email, confirmationCode);
    } catch (error) {
      logger.err(error.message);
      return { success: false };
    }

    return { success: true };
  }

  @utils.dbErrorDefaultReactor({ except: [], logger })
  private async saveUser(profileDto: dto.PrepareUserDto, confirmationCode: string): Promise<void> {
    const company = await this.prepareCompany(profileDto.company);
    await UserManager.createUser(profileDto, company, confirmationCode);
  }

  /**
   * Get the company from the database with corresponding id
   * otherwise create a company with provided data and return it.
   */
  @utils.dbErrorDefaultReactor({ except: [], logger })
  private async prepareCompany({ id, name }: { id: number, name: string; }): Promise<Company> {
    if (id >= 0) {
      const targetCompany = await CompanyManager.getCompany(id);

      if (targetCompany) return targetCompany;
    }

    return CompanyManager.createCompany({ name, logoUrl: null });
  }

  @utils.dbErrorDefaultReactor({ except: [Errors.BadRequestError], logger })
  public async completeRegistration(completionDto: dto.CompleteRegistrationDto)
    : Promise<apiResponses.ICompleteRegistration> {
    const targetUser = await UserManager.getUser(completionDto.profileId);
    if (targetUser && targetUser.confirmationCode === completionDto.confirmationCode) {
      await UserManager.setUserRegistered(completionDto.profileId);
      return { success: true };
    }

    throw new Errors.BadRequestError('Invalid code or user.');
  }

  @utils.dbErrorDefaultReactor({ except: [], logger })
  public async searchUser(searchDto: dto.SearchUserDto)
    : Promise<apiResponses.ISearchUserResponseDto> {
    return { results: await UserManager.getUserBasicInfoByName(searchDto.name) || [] };
  }

  @utils.dbErrorDefaultReactor({ except: [], logger })
  public async getNReviewsGot(bodyData: dto.GetNReviewsGotDto)
    : Promise<apiResponses.IGetNReviewsGotAmountResponseDto> {
    const targetData = await UserManager.getUserWithReviewsGot(bodyData.profileId);
    return { amount: targetData?.reviewsGot.length || 0 };
  }

  @utils.dbErrorDefaultReactor({ except: [], logger })
  public async getNReviewsLeft(bodyData: dto.GetNReviewsLeftDto)
    : Promise<apiResponses.IGetNReviewsLeftAmountResponseDto> {
    const targetData = await UserManager.getUserWithReviewsLeft(bodyData.profileId);
    return { amount: targetData?.reviewsLeft.length || 0 };
  }

  @utils.dbErrorDefaultReactor({ except: [Errors.BadRequestError], logger })
  public async getNthReviewGot(bodyData: dto.GetNthReviewGotDto)
    : Promise<apiResponses.IGetNthReviewGotResponseDto> {
    const target = await UserManager.getUserWithReviewsGot(bodyData.profileId);

    if (!target?.reviewsGot || target?.reviewsGot.length <= bodyData.nthReview) {
      throw new Errors.BadRequestError('No review with the index.');
    }

    const review = target.reviewsGot[bodyData.nthReview];
    return this.mapReviewToReducedReview(review);
  }

  @utils.dbErrorDefaultReactor({ except: [Errors.BadRequestError], logger })
  public async getNthReviewLeft(bodyData: dto.GetNthReviewLeftDto)
    : Promise<apiResponses.IGetNthReviewLeftResponseDto> {
    const author = await UserManager.getUserWithReviewsLeft(bodyData.profileId);

    if (!author?.reviewsLeft || author?.reviewsLeft.length <= bodyData.nthReview) {
      throw new Errors.BadRequestError('No review with the index.');
    }

    const review = author.reviewsLeft[bodyData.nthReview];
    return this.mapReviewToReducedReview(review);
  }

  private mapReviewToReducedReview(review: Review)
    : apiResponses.IGetNthReviewLeftResponseDto {
    return {
      activityComment: review.activityComment,
      activityMark: review.activityMark,
      adviceComment: review.adviceComment,
      bounds: review.bounds,
      improvements: review.improvements,
      leadershipComment: review.leadershipComment,
      leadershipMark: review.leadershipMark,
      levelComment: review.leadershipComment,
      levelMark: review.levelMark,
      ownHireOpinionComment: review.ownHireOpinionComment,
      ownHireOpinionMark: review.ownHireOpinionMark,
      qualityComment: review.qualityComment,
      qualityMark: review.qualityMark,
      results: review.results,
      strengths: review.strengths,
      targetName: review.target.name,
      targetPhotoUrl: review.target.photoUrl,
      targetPredefinedName: review.targetPredefinedName,
      tasks: review.tasks,
      workplace: review.workplace,
    };
  }

  @utils.dbErrorDefaultReactor({ except: [Errors.BadRequestError], logger })
  public async checkAccessToReviewsAboutUser(bodyData: dto.CheckAccessToReviewsAboutUserDto)
    : Promise<apiResponses.ICheckAccessToReviewsAboutUserDto> {
    return {
      success: await UserManager.hasAccessToReviewsAboutUser(
        bodyData.askerProfileId, bodyData.targetEmail
      )
    };
  }

  @utils.dbErrorDefaultReactor({ except: [Errors.BadRequestError], logger })
  public async notifyReferral(bodyData: dto.NotifyReferralDto)
    : Promise<apiResponses.INotifyReferralResponseDto> {
    const referral = await UserManager.getUserByEmail(bodyData.referralEmail);

    if (!referral) {
      throw new Errors.BadRequestError('No referral with such an email.');
    }

    try {
      await MailService.sendReferralNotification(
        bodyData.referralEmail,
        bodyData.targetName,
        bodyData.targetEmail
      );
    } catch (error) {
      return { success: false };
    }

    return { success: true };
  }
}
