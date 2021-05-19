import { Errors } from 'typescript-rest';
import { v1 as uuidv1 } from 'uuid';

import Dtos from '@dto';
import Logger from '@common/Logger';
import * as ApiResponses from '@typing/apiResponses';
import UserManager from '@database/managers/UserManager';
import CompanyManager from '@database/managers/CompanyManager';

import MailService from './Mail';

/**
 * Service in charge of registration and managing user data.
 */
export default class UserService {
  public async checkIsUserRegistered(profileIdDto: Dtos.CheckIsUserRegisteredDto)
    : Promise<ApiResponses.ICheckIsUserRegisteredResponseDto> {
    try {
      return { isRegistered: !!await UserManager.getUser(profileIdDto.profileId) };
    } catch (error) {
      Logger.ifdev()?.err(error.message);
      throw new Errors.InternalServerError('Server-side database error');
    }
  }

  public async checkIsUserConfirmed(profileIdDto: Dtos.CheckIsUserConfirmedDto)
    : Promise<ApiResponses.ICheckIsUserConfirmedResponseDto> {
    try {
      // Making confirmation code null is to be considered the user is registered.
      return {
        isConfirmed: (await UserManager.getUser(profileIdDto.profileId))?.confirmationCode === null
      };
    } catch (error) {
      Logger.ifdev()?.err(error.message);
      throw new Errors.InternalServerError('Server-side database error');
    }
  }

  /**
   * Save user info and send email to confirm.
   */
  public async prepareUser(profileDto: Dtos.PrepareUserDto)
    : Promise<ApiResponses.IPrepareUserResponseDto> {
    const confirmationCode = uuidv1();

    // Save the user.
    try {
      const company = await this.prepareCompany(profileDto.companyName, profileDto.companySite);
      await UserManager.createUser(profileDto, company, confirmationCode);
    } catch (error) {
      Logger.ifdev()?.err(error.message);
      throw new Errors.InternalServerError('Server-side database error');
    }

    // Send the confirmation code.
    try {
      await MailService.sendConfirmationMail(profileDto.email, confirmationCode);
    } catch (error) {
      Logger.ifdev()?.err(error.message);
      return { success: false };
    }

    return { success: true };
  }

  /**
   * Get the company from the database with corresponding name and website
   * otherwise create a company with provided data and return it.
   */
  private async prepareCompany(name: string, site: string) {
    try {
      return await CompanyManager.getCompanyByFullPublicInfo(name, site)
      || CompanyManager.createCompany({ name, site, logoUrl: null });
    } catch (error) {
      Logger.ifdev()?.err(error.message);
      throw new Errors.InternalServerError('Server-side database error');
    }
  }

  public async completeRegistration(completionDto: Dtos.CompleteRegistrationDto)
    : Promise<ApiResponses.ICompleteRegistration> {
    try {
      const targetUser = await UserManager.getUser(completionDto.profileId);
      if (targetUser && targetUser.confirmationCode === completionDto.confirmationCode) {
        await UserManager.setUserRegistered(completionDto.profileId);
        return { success: true };
      }

      throw new Errors.BadRequestError('Invalid code or user.');
    } catch (error) {
      Logger.ifdev()?.err(error.message);
      throw new Errors.InternalServerError('Server-side database error');
    }
  }

  public async searchUser(searchDto: Dtos.SearchUserDto)
    : Promise<ApiResponses.ISearchUserResponseDto> {
    try {
      return await UserManager.getUserByName(searchDto.name) || [];
    } catch (error) {
      Logger.ifdev()?.err(error.message);
      throw new Errors.InternalServerError('Server-side database error');
    }
  }

  public async getNReviewsOf(bodyData: Dtos.GetNReviewsOfDto)
    : Promise<ApiResponses.IGetNReviewsOfAmountResponseDto> {
    try {
      const targetData = await UserManager.getUserWithReviewsLeft(bodyData.profileId);
      return { amount: targetData?.reviewsLeft.length || 0 };
    } catch (error) {
      Logger.ifdev()?.err(error.message);
      throw new Errors.InternalServerError('Server-side database error');
    }
  }
}
