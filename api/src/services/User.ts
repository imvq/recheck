import { Errors } from 'typescript-rest';
import axios, { AxiosResponse } from 'axios';

import * as Constants from '@common/Constants';
import * as Cookies from '@common/Cookies';
import Dtos from '@dto';
import Types from '@types';
import Utils from '@utils';
import Logger from '@common/Logger';
import UserManager from '@database/managers/UserManager';

/**
 * Service in charge of registration and managing user data.
 */
export default class UserService {
  public async isUserRegistered(checkDto: Dtos.IsRegisteredDto)
    : Promise<boolean> {
    return UserManager.doesUserExist(checkDto.profileId);
  }

  public async registerUser(registrationDto: Dtos.RegistrationDto)
    : Promise<void> {
    try {
      UserManager.createUser(
        registrationDto.profileId,
        registrationDto.linkedIn
      );
    } catch (error) {
      Logger.ifdev()?.err(error.message);
      throw new Errors.InternalServerError('Internal database error.');
    }
  }

  public async getProfile(cookies: Types.StringIndexable)
    : Promise<Types.GetProfileResponseDto> {
    try {
      if (!cookies[Cookies.BEARER]) {
        throw new Errors.UnauthorizedError('No Bearer token provided');
      }

      const config = Utils.createAuthConfig(cookies[Cookies.BEARER]);
      const { data: profile }: AxiosResponse<Types.ProfileDto> = await axios.get(
        Constants.PROFILE_URL, config
      );
      const { data: email }: AxiosResponse<Types.EmailDto> = await axios.get(
        Constants.EMAIL_URL, config
      );
      const { data: photo }: AxiosResponse<Types.PhotoDto> = await axios.get(
        Constants.PHOTO_URL, config
      );

      return {
        id: `${profile.id}`,
        name: `${profile.localizedFirstName} ${profile.localizedLastName}`,
        email: `${email.elements[0]['handle~'].emailAddress}`,
        photoUrl: `${photo.profilePicture['displayImage~'].elements[0].identifiers[0].identifier}`
      };
    } catch (error) {
      throw error instanceof Errors.UnauthorizedError ? error
        : new Errors.InternalServerError('Request limits breach.');
    }
  }
}
