import { getRepository } from 'typeorm';

import * as generalTypes from '@typing/general';
import Company from '../entities/Company.entity';
import User from '../entities/User.entity';

/**
 * Class providing operations with User entity.
 */
export default class UserManager {
  public static async createUser(
    userData: generalTypes.UserData,
    company: Company,
    confirmationCode: string
  ): Promise<void> {
    const repository = getRepository(User);
    const toBeSaved = repository.create({ ...userData, company, confirmationCode });

    await repository.save(toBeSaved);
  }

  /**
   * Making confirmation code null is to be considered the user is registered.
   */
  public static async setUserRegistered(profileId: string)
    : Promise<void> {
    await getRepository(User).save({ profileId, confirmationCode: null });
  }

  public static async getUser(profileId: string, relations?: string[])
    : Promise<User | undefined> {
    return getRepository(User).findOne(profileId, { relations });
  }

  public static async getUserByEmail(email: string)
    : Promise<User | undefined> {
    return getRepository(User).findOne({ email });
  }

  public static async getUserBySharedId(id: string, relations?: string[])
    : Promise<User | undefined> {
    return getRepository(User).findOne({ shareableId: id }, { relations });
  }

  public static async getUserWithReviewsGot(profileId: string)
    : Promise<User | undefined> {
    return getRepository(User).findOne({
      relations: ['reviewsGot', 'reviewsGot.target'],
      where: { profileId },
      order: { profileId: 'DESC' }
    });
  }

  public static async getUserWithReviewsLeft(profileId: string)
    : Promise<User | undefined> {
    return getRepository(User).findOne({
      relations: ['reviewsLeft', 'reviewsLeft.target'],
      where: { profileId },
      order: { profileId: 'DESC' }
    });
  }

  public static async getUserBasicInfoByName(name: string)
    : Promise<User[] | undefined> {
    return getRepository(User).find({
      select: ['name', 'email', 'photoUrl', 'position', 'workStartMonth', 'workStartYear'],
      relations: ['company'],
      where: { name }
    });
  }

  public static async hasAccessToReviewsAboutUser(askerId: string, targetEmail: string)
    : Promise<boolean> {
    const repository = getRepository(User);
    const targetUser = await repository.findOne({ where: { email: targetEmail } });
    if (!targetEmail) return false;

    return !!await repository.createQueryBuilder('users_available')
      .where('ownerId = :askerId', { askerId })
      .where('targetId = :targetId', { targetId: targetUser?.profileId })
      .getOne();
  }

  public static async updateUser(user: User): Promise<User> {
    return getRepository(User).save(user);
  }
}
