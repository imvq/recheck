import { getRepository, Repository } from 'typeorm';

import * as utilityTypes from '@typing/utility';
import * as generalTypes from '@typing/general';
import Company from '../entities/Company.entity';
import User from '../entities/User.entity';

/**
 * Class providing operations with User entity.
 */
export default class UserManager {
  private static repo: utilityTypes.Nullable<Repository<User>> = null;

  // Must be invoked after connection being established.
  public static loadRepository() {
    UserManager.repo = getRepository(User);
  }

  public static async createUser(
    userData: generalTypes.UserData,
    company: Company,
    confirmationCode: string
  ): Promise<void> {
    UserManager.repo?.save(UserManager.repo.create({ ...userData, company, confirmationCode }));
  }

  /**
   * Making confirmation code null is to be considered the user is registered.
   */
  public static async setUserRegistered(profileId: string): Promise<void> {
    UserManager.repo?.save({ profileId, confirmationCode: null });
  }

  public static async getUser(profileId: string, relations?: string[])
    : Promise<utilityTypes.Optional<User>> {
    return UserManager.repo?.findOne(profileId, { relations });
  }

  public static async getUserBySharedId(id: string, relations?: string[])
    : Promise<utilityTypes.Optional<User>> {
    return UserManager.repo?.findOne({ shareableId: id }, { relations });
  }

  public static async getUserWithReviewsGot(profileId: string)
    : Promise<utilityTypes.Optional<User>> {
    return UserManager.repo?.findOne({
      relations: ['reviewsGot', 'reviewsGot.target'],
      where: { profileId },
      order: { profileId: 'DESC' }
    });
  }

  public static async getUserWithReviewsLeft(profileId: string)
    : Promise<utilityTypes.Optional<User>> {
    return UserManager.repo?.findOne({
      relations: ['reviewsLeft', 'reviewsLeft.target'],
      where: { profileId },
      order: { profileId: 'DESC' }
    });
  }

  public static async getUserBasicInfoByName(name: string)
    : Promise<utilityTypes.Optional<User[]>> {
    return UserManager.repo?.find({
      select: ['name', 'email', 'photoUrl', 'position', 'workStartMonth', 'workStartYear'],
      relations: ['company'],
      where: { name }
    });
  }

  public static async hasAccessToReviewsAboutUser(askerId: string, targetEmail: string)
    : Promise<boolean> {
    const targetUser = await UserManager.repo?.findOne({ where: { email: targetEmail } });
    if (!targetEmail) return false;

    return !!await UserManager.repo?.createQueryBuilder('users_available')
      .where('ownerId = :askerId', { askerId })
      .where('targetId = :targetId', { targetId: targetUser?.profileId })
      .getOne();
  }
}
