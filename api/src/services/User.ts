import { Errors } from 'typescript-rest';
import { v1 as uuidv1 } from 'uuid';

import dto from '@dto';
import utils from '@utils';
import * as apiResponses from '@typing/apiResponses';

import Company from '@database/entities/Company.entity';

import UserManager from '@database/managers/UserManager';
import CompanyManager from '@database/managers/CompanyManager';

import Logger from '@common/Logger';
import MailService from './Mail';

/**
 * Service in charge of registration and managing user data.
 */
export default class UserService {
  @utils.dbErrorDefaultReactor({ except: [] })
  public async checkIsUserRegistered(profileIdDto: dto.CheckIsUserRegisteredDto)
    : Promise<apiResponses.ICheckIsUserRegisteredResponseDto> {
    return { isRegistered: !!await UserManager.getUser(profileIdDto.profileId) };
  }

  @utils.dbErrorDefaultReactor({ except: [] })
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
      Logger.ifdev()?.err(error.message);
      return { success: false };
    }

    return { success: true };
  }

  @utils.dbErrorDefaultReactor({ except: [] })
  private async saveUser(profileDto: dto.PrepareUserDto, confirmationCode: string): Promise<void> {
    const company = await this.prepareCompany(profileDto.companyName, profileDto.companySite);
    await UserManager.createUser(profileDto, company, confirmationCode);
  }

  /**
   * Get the company from the database with corresponding name and website
   * otherwise create a company with provided data and return it.
   */
  @utils.dbErrorDefaultReactor({ except: [] })
  private async prepareCompany(name: string, site: string): Promise<Company> {
    return await CompanyManager.getCompanyByFullPublicInfo(name, site)
      || CompanyManager.createCompany({ name, site, logoUrl: null });
  }

  @utils.dbErrorDefaultReactor({ except: [Errors.BadRequestError] })
  public async completeRegistration(completionDto: dto.CompleteRegistrationDto)
    : Promise<apiResponses.ICompleteRegistration> {
    const targetUser = await UserManager.getUser(completionDto.profileId);
    if (targetUser && targetUser.confirmationCode === completionDto.confirmationCode) {
      await UserManager.setUserRegistered(completionDto.profileId);
      return { success: true };
    }

    throw new Errors.BadRequestError('Invalid code or user.');
  }

  @utils.dbErrorDefaultReactor({ except: [] })
  public async searchUser(searchDto: dto.SearchUserDto)
    : Promise<apiResponses.ISearchUserResponseDto> {
    return { results: await UserManager.getUserBasicInfoByName(searchDto.name) || [] };
  }

  @utils.dbErrorDefaultReactor({ except: [] })
  public async getNReviewsGot(bodyData: dto.GetNReviewsGotDto)
    : Promise<apiResponses.IGetNReviewsGotAmountResponseDto> {
    const targetData = await UserManager.getUserWithReviewsGot(bodyData.profileId);
    return { amount: targetData?.reviewsGot.length || 0 };
  }

  @utils.dbErrorDefaultReactor({ except: [] })
  public async getNReviewsLeft(bodyData: dto.GetNReviewsLeftDto)
    : Promise<apiResponses.IGetNReviewsLeftAmountResponseDto> {
    const targetData = await UserManager.getUserWithReviewsLeft(bodyData.profileId);
    return { amount: targetData?.reviewsLeft.length || 0 };
  }

  @utils.dbErrorDefaultReactor({ except: [Errors.BadRequestError] })
  public async getNthReviewGot(bodyData: dto.GetNthReviewGotDto)
    : Promise<apiResponses.IGetNthReviewGotResponseDto> {
    const targetData = await UserManager.getUserWithReviewsGot(bodyData.profileId);
    if (!targetData?.reviewsGot || targetData?.reviewsGot.length <= bodyData.nthReview) {
      throw new Errors.BadRequestError('No review with the index.');
    }

    return targetData?.reviewsGot[bodyData.nthReview];
  }

  @utils.dbErrorDefaultReactor({ except: [Errors.BadRequestError] })
  public async getNthReviewLeft(bodyData: dto.GetNthReviewLeftDto)
    : Promise<apiResponses.IGetNthReviewLeftResponseDto> {
    const targetData = await UserManager.getUserWithReviewsLeft(bodyData.profileId);
    if (!targetData?.reviewsLeft || targetData?.reviewsLeft.length <= bodyData.nthReview) {
      throw new Errors.BadRequestError('No review with the index.');
    }

    return targetData?.reviewsLeft[bodyData.nthReview];
  }
}
