import { Errors } from 'typescript-rest';
import { SendMailOptions } from 'nodemailer';

import Dtos from '@dto';
import Types from '@types';
import Utils from '@utils';
import Mailer from '@common/Mailer';
import Logger from '@common/Logger';
import * as Constants from '@common/Constants';
import UserManager from '@database/managers/UserManager';
import CompanyManager from '@database/managers/CompanyManager';
import ConfirmationManager from '@database/managers/ConfirmationManager';

/**
 * Service in charge of registration and managing user data.
 */
export default class UserService {
  public async checkIsUserRegistered(profileIdDto: Dtos.CheckIsUserRegisteredDto)
    : Promise<Types.CheckIsUserRegisteredResponseDto> {
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
    : Promise<Types.PrepareUserResponseDto> {
    const code = Utils.getRandomCode(Constants.CONFIRMATION_CODE_LENGTH);

    // Save the user.
    try {
      const company = await this.prepareCompany(profileDto.companyName, profileDto.companySite);
      const user = await UserManager.createUser(profileDto, company);
      await ConfirmationManager.createConfirmation(user, code);
    } catch (error) {
      Logger.ifdev()?.err(error.message);
      throw new Errors.InternalServerError('Server-side database error');
    }

    // Send the confirmation code.
    try {
      const options: SendMailOptions = {
        from: process.env.MAIL_USERNAME as string,
        to: profileDto.email,
        subject: 'Подтверждение регистрации в reCheck',
        text: `Код подтверждения: ${code}`
      };
      await Mailer.getInstance().sendMail(options);
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
    return await CompanyManager.getCompanyByFullPublicInfo(name, site)
      || CompanyManager.createCompany({ name, site, logoUrl: null });
  }
}
