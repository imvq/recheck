import { Errors } from 'typescript-rest';
import axios, { AxiosResponse } from 'axios';
import { SendMailOptions } from 'nodemailer';

import * as Constants from '@common/Constants';
import * as Cookies from '@common/Cookies';
import Dtos from '@dto';
import Types from '@types';
import Utils from '@utils';
import Mailer from '@common/Mailer';
import Logger from '@common/Logger';
import UserManager from '@database/managers/UserManager';

/**
 * Service in charge of registration and managing user data.
 */
export default class UserService {
  public async prepareUser(profileDto: Dtos.ProfileDto): Promise<void> {
    const options: SendMailOptions = {
      from: process.env.MAIL_USERNAME as string,
      to: profileDto.email,
      subject: 'Подтверждение регистрации в reCheck',
      text: 'Lorem ipsum'
    };
    Mailer.getInstance().sendMail(options, (error, info) => {});
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
