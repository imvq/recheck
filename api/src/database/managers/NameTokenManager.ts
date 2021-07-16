import { getRepository } from 'typeorm';

import User from '../entities/User.entity';
import NameToken from '../entities/NameToken.entity';

/**
 * Class providing operations with NameToken entity.
 */
export default class NameTokenManager {
  public static async saveTokenizedName(userProfileId: string, tokens: string[]): Promise<void> {
    const repository = getRepository(NameToken);

    await Promise.all(tokens.map(async tokenValue => {
      const tokenEntityObject = await NameTokenManager.createEntityRepresentationOf(tokenValue);

      await repository
        .createQueryBuilder()
        .relation('bounds')
        .of(tokenEntityObject)
        .add(userProfileId);
    }));
  }

  /**
   * SRP violation: the token we want to get can be not saved already
   * so we need to create it to be able to operate with it as a DB object.
   */
  private static async createEntityRepresentationOf(tokenValue: string): Promise<NameToken> {
    const repository = getRepository(NameToken);
    let token = await repository
      .createQueryBuilder()
      .where({ tokenValue })
      .getOne();

    if (!token) {
      token = repository.create({ tokenValue });
      await repository.save(token);
    }

    return token;
  }

  /**
   * Find all users whose parts of their names contain provided tokens.
   */
  public static async getMatchedUsers(tokens: string[])
    : Promise<User[] | undefined> {
    /*
     * Results retrieved from Promise.all will
     * look like [[[], []], [[], []], ...]
     * where the last level of nesting is formed from all bounds of a token,
     * the second level is a union of all bounds for all tokens found in the DB
     * and the first level of nesting is all bounds for all tokens provided by the query.
     * We need to flat those into a 1-dimensional array.
    */
    const allResults = (await Promise.all(tokens.map(async token => {
      const matchedNameTokens = await getRepository(NameToken)
        .createQueryBuilder('name_tokens')
        .where('name_tokens.tokenValue LIKE :token', { token: `${token}%` })
        .leftJoinAndSelect('name_tokens.bounds', 'bounds')
        // Limit results because by design we only need to get some of them.
        .take(10)
        .getMany();
      return matchedNameTokens.map(namedToken => namedToken.bounds);
    }))).flat(2);

    // Normally we can get some different objects that represent the same entity.
    // We must filter them to leave only unique profileIDs.
    // As far as we limit results (by design) there is no performance drop.
    return NameTokenManager.leaveUniqueUsers(allResults);
  }

  /**
   * Leave users with unique profileID's.
   * The complexity is getting closer to O(N^2).
   * However, the function is supposed to be used on small arrays (~20 elements)
   * therefore, a drop in speed is not expected.
   */
  private static leaveUniqueUsers(users: User[]): User[] {
    const uniqueUsers: User[] = [];
    users.forEach(oneOfProvided => {
      if (uniqueUsers.every(user => user.profileId !== oneOfProvided.profileId)) {
        uniqueUsers.push(oneOfProvided);
      }
    });

    return uniqueUsers;
  }
}
