import path from 'path';

/**
 * Dynamically computed values.
 */

export const ROOT_DIR = require && require.main
  ? path.dirname(require.main.filename) : `../${__dirname}`;

export const DEFAULT_LOGS_LOCATION = `${ROOT_DIR}/debug.log`;
