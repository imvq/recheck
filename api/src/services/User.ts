import Dtos from '@dto';
import UserManager from '@database/managers/UserManager';

/**
 * Service in charge of registration and managing user data.
 */
export default class UserService {
  public async isRegistered(checkDto: Dtos.IsRegisteredDto)
    : Promise<boolean> {
    return UserManager.doesUserExist(checkDto.id);
  }
}
