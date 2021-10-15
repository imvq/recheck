/**
 * App-wide constants.
 */

export const DEFAULT_HOST = 'localhost';
export const DEFAULT_PORT = '8081';
export const DEFAULT_PHOTO_PLACEHOLDER_URL = `${process.env.ORIGIN}/media/user-default.png`;

export const LI_EMAIL_URL = 'https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))';
export const LI_PHOTO_URL = 'https://api.linkedin.com/v2/me?projection=(id,profilePicture(displayImage~digitalmediaAsset:playableStreams))';

export const RECOMMENDATIONS_DEFAULT_LENGHT = 36;
