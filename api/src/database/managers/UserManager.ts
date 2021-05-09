import { getRepository, Repository } from 'typeorm';

import * as UtilityTypes from '@typing/utility';
import * as GeneralTypes from '@typing/general';
import Company from '../entities/Company.entity';
import User from '../entities/User.entity';

/**
 * Class providing operations with User entity.
 */
export default class UserManager {
  private static repo: UtilityTypes.Nullable<Repository<User>> = null;

  // Must be invoked after connection being established.
  public static loadRepository() {
    UserManager.repo = getRepository(User);
  }

  public static async createUser(
    userData: GeneralTypes.UserData,
    company: Company,
    confirmationCode: string
  ) {
    UserManager.repo?.save(UserManager.repo.create({ ...userData, company, confirmationCode }));
  }

  /**
   * Making confirmation code null is to be considered the user is registered.
   */
  public static async setUserRegistered(profileId: string) {
    UserManager.repo?.save({ profileId, confirmationCode: null });
  }

  public static getUser = async (profileId: string) => UserManager.repo?.findOne(profileId);
}
