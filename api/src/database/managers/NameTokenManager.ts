import { getRepository } from 'typeorm';

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
}
