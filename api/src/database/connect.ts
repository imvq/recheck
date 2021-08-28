import * as orm from 'typeorm';

import logger from '@logging/Logger';

import config from './config';

export default class PostgreSqlConnector {
  private static connection: orm.Connection | null = null;

  public static async connect() {
    try {
      await PostgreSqlConnector.getConnection();
    } catch (exception) {
      logger.err(exception?.message || 'Database connection error.');
    }
  }

  private static async getConnection() {
    try {
      await PostgreSqlConnector.getExistedConnection();
    } catch {
      await orm.createConnection(config);

      logger.log('Database connection established');
    }
  }

  private static async getExistedConnection() {
    PostgreSqlConnector.connection = orm.getConnection();

    if (!PostgreSqlConnector.connection.isConnected) {
      await PostgreSqlConnector.connection.connect();

      logger.log('Database connection re-established');
    }
  }
}
