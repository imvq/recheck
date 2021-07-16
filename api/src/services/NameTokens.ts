import UserManager from '@database/managers/UserManager';
import NameTokenManager from '@database/managers/NameTokenManager';

export default class NameTokens {
  public splitName(userProfileId: string, fullName: string) {
    const tokens = fullName.replace(/\s\s+/g, ' ').split(' ');
  }
}
