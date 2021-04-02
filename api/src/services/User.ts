import { Errors } from 'typescript-rest';

import Dtos from '@dto';
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
}
