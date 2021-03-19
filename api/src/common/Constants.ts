/**
 * App-wide constants.
 */
export default class Constants {
  public static readonly VERSION = '1.0.0';

  public static readonly MAX_UPLOADED_FILE_SIZE = 5 * 1024 * 1024;

  public static readonly DEFAULT_HOST = 'localhost';

  public static readonly DEFAULT_PORT = 8081;

  public static readonly DEFAULT_MAIL_PORT = 587;

  public static readonly DEFAULT_CODE_LENGTH = 5;

  public static readonly DEFAULT_ACCESS_TOKEN_MAX_AGE = 1800000;

  public static readonly DEFAULT_REFRESH_TOKEN_MAX_AGE = 2.628e+9;

  public static readonly DEFAULT_REFRESH_TOKEN_LENGTH = 256;
}
