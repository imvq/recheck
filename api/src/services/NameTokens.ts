import utils from '@utils';

import User from '@database/entities/User.entity';

import logger from '@logging/Logger';
import NameTokenManager from '@database/managers/NameTokenManager';

export default class NameTokens {
  @utils.dbErrorDefaultReactor({ except: [], logger })
  public static async saveName(userProfileId: string, fullName: string) {
    const tokens = fullName.toLocaleLowerCase().replace(/\s\s+/g, ' ').split(' ');
    await NameTokenManager.saveTokenizedName(userProfileId, tokens);
  }

  @utils.dbErrorDefaultReactor({ except: [], logger })
  public static async getMatchedUsers(tokens: string[], limitResults?: boolean)
    : Promise<User[] | undefined> {
    return NameTokenManager.getMatchedUsers(tokens, limitResults);
  }
}
