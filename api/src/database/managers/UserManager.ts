import { getRepository } from 'typeorm';

import User from '../entities/User.entity';

/**
 * Class providing operations with User entity.
 */
export default class UserManager {
  private static readonly repo = getRepository(User);

  public doesUserExist = async (profileId: string) => (
    !!await UserManager.repo.findOne(profileId)
  )

  public createUser = async (profileId: string, linkedIn: string) => (
    UserManager.repo.save(UserManager.repo.create({ profileId, linkedIn }))
  )
}