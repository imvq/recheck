import { Handler } from 'express';

import { ILogger } from '@typing';

import getDatabase from './database';

/**
 * Used for logging in development mode.
 */
export let logger: ILogger | null = null;

/**
 * Used for logging of Express requests in development mode.
 */
export let morgan: ((_: string) => Handler) | null = null;

if (process.env.NODE_ENV !== 'production') {
  logger = require('./logging').default;

  morgan = require('morgan');
}

/**
 * Database connection.
 */
export const database = getDatabase(logger);
