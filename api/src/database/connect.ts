import * as orm from 'typeorm';

import logger from '@logging/Logger';

import config from './config';

export default class PostgreSqlConnector {
  private connection: orm.Connection | null = null;

  public async connect() {
    try {
      await this.getConnection();
    } catch (exception) {
      logger.err(exception?.message || 'Database connection error.');
    }
  }

  private async getConnection() {
    try {
      await this.getExistedConnection();
    } catch {
      await orm.createConnection(config);

      logger.log('Database connection established');
    }
  }

  private async getExistedConnection() {
    this.connection = orm.getConnection();

    if (!this.connection.isConnected) {
      await this.connection.connect();

      logger.log('Database connection re-established');
    }
  }
}
