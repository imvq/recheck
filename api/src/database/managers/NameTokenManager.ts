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
  public static async getMatchedUsers(tokens: string[], limitResult?: boolean)
    : Promise<User[] | undefined> {
    const resultsMap: { [key: string]: User } = {};

    await Promise.all(tokens.map(async token => {
      const matchedNameTokensPreparedQuery = getRepository(NameToken)
        .createQueryBuilder('name_tokens')
        .where('name_tokens.tokenValue LIKE :token', { token: `${token}%` })
        .leftJoinAndSelect('name_tokens.bounds', 'bounds');

      const matchedNameTokens = await (limitResult
        ? matchedNameTokensPreparedQuery
          .take(10)
          .getMany()
        : matchedNameTokensPreparedQuery.getMany());

      matchedNameTokens
        .forEach(namedToken => {
          namedToken.bounds.forEach(user => {
            resultsMap[user.profileId] = user;
          });
        });
    }));

    return Object.values(resultsMap);
  }
}