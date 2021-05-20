import { ConnectionOptions } from 'typeorm';

import utils from '@utils';

/**
 * Typeorm PostgreSQL connection configuration.
 */
const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST as string,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  username: process.env.DB_USERNAME as string,
  password: process.env.DB_PASSWORD as string,
  database: process.env.DB_NAME as string,
  synchronize: utils.parseBoolean(process.env.DB_SYNC as string),
  logging: utils.parseBoolean(process.env.DB_LOGS as string),
  entities: ['dist/database/entities/**/*.entity.js'],
  migrations: ['dist/database/migrations/**/*.js'],
  cli: {
    migrationsDir: 'src/database/migrations'
  }
};

export = config;
