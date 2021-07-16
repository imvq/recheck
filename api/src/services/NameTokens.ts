import utils from '@utils';

import logger from '@logging/Logger';
import NameTokenManager from '@database/managers/NameTokenManager';

export default class NameTokens {
  @utils.dbErrorDefaultReactor({ except: [], logger })
  public static async saveName(userProfileId: string, fullName: string) {
    const tokens = fullName.replace(/\s\s+/g, ' ').split(' ');
    await NameTokenManager.saveTokenizedName(userProfileId, tokens);
  }
}
