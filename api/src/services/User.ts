import { Errors } from 'typescript-rest';
import { SendMailOptions } from 'nodemailer';

import Dtos from '@dto';
import Types from '@types';
import Mailer from '@common/Mailer';
import Logger from '@common/Logger';
import UserManager from '@database/managers/UserManager';

/**
 * Service in charge of registration and managing user data.
 */
export default class UserService {
  public async checkIsUserRegistered(profileIdDto: Dtos.CheckIsUserRegisteredDto)
    : Promise<Types.CheckIsUserRegisteredResponseDto> {
    return { isRegistered: !!await UserManager.getUser(profileIdDto.profileId) };
  }

  /**
   * Save user info and send email to confirm.
   */
  public async prepareUser(profileDto: Dtos.PrepareUserDto)
    : Promise<Types.PrepareUserResponseDto> {
    const options: SendMailOptions = {
      from: process.env.MAIL_USERNAME as string,
      to: profileDto.email,
      subject: 'Подтверждение регистрации в reCheck',
      text: 'Lorem ipsum'
    };

    try {
      await Mailer.getInstance().sendMail(options);
    } catch (error) {
      Logger.ifdev()?.err(error.message);
      return { success: false };
    }

    return { success: true };
  }

  public async registerUser(registrationDto: Dtos.RegistrationDto): Promise<void> {
    try {
      UserManager.createUser(registrationDto.profileId);
    } catch (error) {
      Logger.ifdev()?.err(error.message);
      throw new Errors.InternalServerError('Internal database error.');
    }
  }
}
