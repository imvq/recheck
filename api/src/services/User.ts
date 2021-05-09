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

  public async completeRegistration(profileId: string)
    : Promise<ApiResponses.ICompleteRegistration> {
    try {
      await UserManager.setUserRegistered(profileId);
      return { success: true };
    } catch (error) {
      Logger.ifdev()?.err(error.message);
      throw new Errors.InternalServerError('Server-side database error');
    }
  }
}
