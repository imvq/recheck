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

    await UserManager.updateUser(toBeSaved);
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

  public static async getReducedUserBySharedId(id: string, relations?: string[])
    : Promise<User | undefined> {
    let queryBuilder = getRepository(User)
      .createQueryBuilder('users')
      .select('users.name')
      .addSelect('users.photoUrl')
      .addSelect('users.position')
      .addSelect('users.shareableId')
      .addSelect('users.workStartYear')
      .addSelect('users.workStartMonth')
      .addSelect('users.shareableId');

    relations?.forEach(relation => {
      queryBuilder = queryBuilder
        .innerJoinAndSelect(`users.${relation}`, `users_${relation}`)
        .addSelect(`users_${relation}`);
    });

    return queryBuilder.where('users.shareableId = :id', { id }).getOne();
  }

  public static async getUserWithCompanyMembers(profileId: string)
    : Promise<User | undefined> {
    return getRepository(User)
      .createQueryBuilder('users')
      .innerJoinAndSelect('users.company', 'company')
      .innerJoinAndSelect('company.members', 'members')
      .innerJoinAndSelect('members.company', 'members_company')
      .where({ profileId })
      .andWhere('members.profileId != :profileId', { profileId })
      .getOne();
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
    return getRepository(User)
      .createQueryBuilder('users')
      .where({ profileId })
      .innerJoinAndSelect('users.reviewsLeft', 'reviewsLeft')
      .innerJoinAndSelect('reviewsLeft.target', 'target')
      .innerJoinAndSelect('target.company', 'company')
      .getOne();
  }

  public static async isTargetAvailable(asker: User, target: User)
    : Promise<boolean> {
    return await getRepository(User)
      .createQueryBuilder('users')
      .innerJoin('users.availableUsers', 'availableUsers')
      .where(`users.profileId = '${asker.profileId}'`)
      .andWhere(`availableUsers.profileId = '${target.profileId}'`)
      .getCount() > 0;
  }

  public static async isTargetAvailableForReview(askerProfileId: string, targetShareableId: string)
    : Promise<boolean> {
    return await getRepository(User)
      .createQueryBuilder('users')
      .innerJoin('users.reviewsLeft', 'reviewsLeft')
      .innerJoin('reviewsLeft.target', 'targets')
      .select('targets')
      .where('users.profileId = :askerProfileId', { askerProfileId })
      .andWhere('targets.shareableId = :targetShareableId', { targetShareableId })
      .getCount() === 0;
  }

  public static async getTargetNReviewsGot(askerProfileId: string, targetShareableId: string)
    : Promise<{ amount: number }> {
    return getRepository(User)
      .createQueryBuilder('users')
      .innerJoin('users.availableUsers', 'availableUsers')
      .innerJoin('availableUsers.reviewsGot', 'reviewsGot')
      .where(`users.profileId = '${askerProfileId}'`)
      .andWhere(`availableUsers.shareableId = '${targetShareableId}'`)
      .select('COUNT(*) as amount')
      .getRawOne();
  }

  public static async getUserBasicInfoByName(name: string)
    : Promise<User[] | undefined> {
    return getRepository(User).find({
      select: ['name', 'email', 'photoUrl', 'position', 'workStartMonth', 'workStartYear'],
      relations: ['company'],
      where: { name }
    });
  }

  public static async makeUserAvailable(asker: User, target: User) {
    asker.availableUsers.push(target);

    return UserManager.updateUser(asker);
  }

  public static async addAvailableReviews(target: User, n = 1) {
    target.reviewsAvailable += n;

    return UserManager.updateUser(target);
  }

  public static async updateUser(user: User): Promise<User> {
    return getRepository(User).save(user);
  }
}
