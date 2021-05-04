import { getConnection, createConnection, Connection } from 'typeorm';

import Logger from '@common/Logger';
import config from './config';
import UserManager from './managers/UserManager';
import ReviewManager from './managers/ReviewManager';
import CompanyManager from './managers/CompanyManager';

function loadRepositories() {
  UserManager.loadRepository();
  ReviewManager.loadRepository();
  CompanyManager.loadRepository();
}

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
        Logger.ifdev()?.log('Database connection re-established');
      }
    } catch {
      await createConnection(config);
      loadRepositories();
      Logger.ifdev()?.log('Database connection established');
    }
  } catch (exception) {
    Logger.ifdev()?.err(exception?.message || 'Database connection error.');
  }
}

export = connect;
