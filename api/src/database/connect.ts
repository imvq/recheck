import { getConnection, createConnection, Connection } from 'typeorm';

import Logger from '@common/Logger';
import config from './config';

/**
 * DB connection provider.
 */
const connect = async (): Promise<void> => {
  let connection: Connection;
  try {
    try {
      connection = getConnection();
      if (!connection.isConnected) {
        await connection.connect();
        Logger.ifdev()?.log('Database connection re-established');
      }
    } catch {
      await createConnection(config);
      Logger.ifdev()?.log('Database connection established');
    }
  } catch (exception) {
    Logger.ifdev()?.err(exception?.message || 'Database connection error.');
  }
};

export = connect;
