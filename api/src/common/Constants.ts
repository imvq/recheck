/**
 * App-wide constants.
 */

export const VERSION = '1.0.0';
export const DEFAULT_HOST = 'localhost';
export const DEFAULT_PORT = 8081;
export const CONFIRMATION_CODE_LENGTH = 5;
export const AUTH_URL = 'https://www.linkedin.com/oauth/v2/accessToken';
export const LI_PROFILE_URL = 'https://api.linkedin.com/v2/me';
export const FA_PROFILE_URL = 'https://graph.facebook.com/me';
export const EMAIL_URL = 'https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))';
export const PHOTO_URL = 'https://api.linkedin.com/v2/me?projection=(id,profilePicture(displayImage~digitalmediaAsset:playableStreams))';
