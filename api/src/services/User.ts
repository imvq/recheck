import { Errors } from 'typescript-rest';
import { SendMailOptions } from 'nodemailer';

import Dtos from '@dto';
import Types from '@types';
import Utils from '@utils';
import Mailer from '@common/Mailer';
import Logger from '@common/Logger';
import * as Constants from '@common/Constants';
import UserManager from '@database/managers/UserManager';
import ConfirmationManager from '@database/managers/ConfirmationManager';

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
    const code = Utils.getRandomCode(Constants.CONFIRMATION_CODE_LENGTH);

    const options: SendMailOptions = {
      from: process.env.MAIL_USERNAME as string,
      to: profileDto.email,
      subject: 'Подтверждение регистрации в reCheck',
      text: `Код подтверждения: ${code}`
    };

    try {
      await Mailer.getInstance().sendMail(options);
    } catch (error) {
      Logger.ifdev()?.err(error.message);
      return { success: false };
    }

    return { success: true };
  }
}
