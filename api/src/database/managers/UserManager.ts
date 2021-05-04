import { getRepository, Repository } from 'typeorm';

import Types from '@types';
import Company from '../entities/Company.entity';
import User from '../entities/User.entity';

/**
 * Class providing operations with User entity.
 */
export default class UserManager {
  private static repo: Types.Nullable<Repository<User>> = null;

  // Must be invoked after connection being established.
  public static loadRepository() {
    UserManager.repo = getRepository(User);
  }

  public static createUser = async (userData: Types.UserData, company: Company) => (
    // Cast the result to User, ignoring that on error it can be undefined.
    // Any errors produce exceptions that are to be handled outside.
    UserManager.repo?.save(UserManager.repo.create({ ...userData, company })) as Promise<User>
  )

  public static getUser = async (profileId: string) => (
    UserManager.repo?.findOne(profileId)
  )
}
