import { getConnection, createConnection, Connection } from 'typeorm';

import logger from '@logging/Logger';
import config from './config';

/**
 * DB connection provider.
 */
async function connect(): Promise<void> {
  let connection: Connection;
  try {
    try {
      connection = getConnection();
      if (!connection.isConnected) {
        await connection.connect();
        logger.log('Database connection re-established');
      }
    } catch {
      await createConnection(config);
      logger.log('Database connection established');
    }
  } catch (exception) {
    logger.err(exception?.message || 'Database connection error.');
  }
}

export = connect;
