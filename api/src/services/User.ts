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
import NameTokensService from './NameTokens';

/**
 * Service in charge of registration and managing user data.
 */
export default class UserService {
  @utils.dbErrorDefaultReactor({ except: [], logger })
  public async isTargetConnected(bodyData: dto.IsTargetConnectedDto)
    : Promise<apiResponses.IIsTargetConnectedResponsDto> {
    const asker = await UserManager.getUser(bodyData.askerProfileId, ['company']);
    const target = await UserManager.getUserBySharedId(bodyData.targetShareableId, ['company']);

    if (!target || target.company.id !== asker?.company.id) {
      return { success: false };
    }

    return { success: true };
  }

  @utils.dbErrorDefaultReactor({ except: [], logger })
  public async checkIsEmailAvailable(emailDto: dto.СheckIsEmailAvailableDto)
    : Promise<apiResponses.ICheckIsEmailAvailableResponseDto> {
    return { success: !await UserManager.getUserByEmail(emailDto.email) };
  }

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
  @utils.dbErrorDefaultReactor({ except: [], logger })
  public async prepareUser(profileDto: dto.PrepareUserDto)
    : Promise<apiResponses.IPrepareUserResponseDto> {
    const confirmationCode = uuidv1();

    await this.saveUser(profileDto, confirmationCode);
    await NameTokensService.saveName(profileDto.profileId, profileDto.name);

    // We need to await the returned value to be able to handle errors
    // just inside the decorated method so the error can be intercepted and returned.
    // eslint-disable-next-line no-return-await
    return await this.sendConfirmation(profileDto.email, confirmationCode);
  }

  @utils.dbErrorDefaultReactor({ except: [Errors.BadRequestError], logger })
  public async resendConfirmation(resendDto: dto.ResendConfirmationDto)
    : Promise<apiResponses.IResendConfirmationResponseDto> {
    const target = await UserManager.getUser(resendDto.profileId);

    if (!target || !target.confirmationCode) {
      throw new Errors.BadRequestError('User confirmation is not possible.');
    }

    // We need to await the returned value to be able to handle errors
    // just inside the decorated method so the error can be intercepted and returned.
    // eslint-disable-next-line no-return-await
    return await this.sendConfirmation(target.email, target.confirmationCode);
  }

  @utils.dbErrorDefaultReactor({ except: [Errors.BadRequestError], logger })
  public async reassignConfirmationEmail(reassignmentDto: dto.ReassignConfirmationEmailDto)
    : Promise<apiResponses.IReassignConfirmationEmailResponseDto> {
    const target = await UserManager.getUser(reassignmentDto.profileId);

    if (!target || target.email === reassignmentDto.email) {
      throw new Errors.BadRequestError('Email reassignment is not possible.');
    }

    if (target.confirmationCode === null) {
      throw new Errors.BadRequestError('User is already confirmed.');
    }

    target.email = reassignmentDto.email;
    await UserManager.updateUser(target);

    // We need to await the returned value to be able to handle errors
    // just inside the decorated method so the error can be intercepted and returned.
    // eslint-disable-next-line no-return-await
    return await this.sendConfirmation(target.email, target.confirmationCode);
  }

  private async sendConfirmation(email: string, confirmationCode: string) {
    try {
      await MailService.sendConfirmationMail(email, confirmationCode);
    } catch (error) {
      logger.err(error.message);
      return { success: false };
    }

    return { success: true };
  }

  @utils.dbErrorDefaultReactor({ except: [], logger })
  private async saveUser(profileDto: dto.PrepareUserDto, confirmationCode: string)
    : Promise<void> {
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

      if (targetUser.referral) {
        this.notifyReferral(targetUser.referral, targetUser.name, targetUser.email);
      }

      return { success: true };
    }

    throw new Errors.BadRequestError('Invalid code or user.');
  }

  @utils.dbErrorDefaultReactor({ except: [], logger })
  public async searchUser(searchDto: dto.SearchUserDto, options?: { isQuickSearch: boolean })
    : Promise<apiResponses.ISearchUserResponseDto> {
    const results = await NameTokensService.getMatchedUsers(
      searchDto.tokens,
      options?.isQuickSearch
    );

    return { results: results || [] };
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
      tasks: review.tasks,
      strengths: review.strengths,
      recommendation: review.recommendation,
      recommendationMark: review.recommendationMark,
      targetName: review.target.name,
      targetPhotoUrl: review.target.photoUrl
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

  @utils.dbErrorDefaultReactor({ except: [], logger })
  public async notifyReferral(referralSharedId: string, targetName: string, targetEmail: string) {
    const referral = await UserManager.getUserBySharedId(referralSharedId);

    if (referral) {
      await MailService.sendReferralNotification(
        referral.email,
        targetName,
        targetEmail
      );
    } else {
      logger.log(`${referralSharedId} not found in the database.`);
    }
  }
}
