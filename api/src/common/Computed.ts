import path from 'path';

export type DD = string;

/**
 * Dynamically computed values.
 */
export default class Computed {
  public static readonly ROOT_DIR = require && require.main
    ? path.dirname(require.main.filename) : `../${__dirname}`;

  public static readonly UPLOADS_DIR = `${Computed.ROOT_DIR}/media`;

  public static readonly DEFAULT_LOGS_LOCATION = `${Computed.ROOT_DIR}/debug.log`;
}
