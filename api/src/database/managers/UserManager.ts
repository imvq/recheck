import { getRepository, Repository } from 'typeorm';

import Types from '@types';
import Logger from '@common/Logger';
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

  public static doesUserExist = async (profileId: string) => (
    !!await UserManager.repo?.findOne(profileId)
  )

  public static createUser = async (profileId: string, linkedIn: string) => (
    UserManager.repo?.save(UserManager.repo.create({ profileId, linkedIn }))
  )
}
