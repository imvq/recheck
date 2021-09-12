import utils from '@utils';

import logger from '@business/logging';
import NameTokenManager from '@database/managers/NameTokenManager';

export default class NameTokens {
  @utils.errorsAutoHandler({ except: [], logger })
  public static async saveName(userProfileId: string, fullName: string) {
    const tokens = fullName.toLocaleLowerCase().replace(/\s\s+/g, ' ').split(' ');
    await NameTokenManager.saveTokenizedName(userProfileId, tokens);
  }

  @utils.errorsAutoHandler({ except: [], logger })
  public static async getMatchedUsers(tokens: string[], limitResults?: boolean) {
    return NameTokenManager.getMatchedUsers(tokens, limitResults);
  }
}
