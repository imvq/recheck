import { ConnectionOptions } from 'typeorm';

/**
 * Typeorm PostgreSQL connection configuration.
 */
const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST as string,
  port: parseInt(process.env.DB_PORT || '5432') || 5432,
  username: process.env.DB_USERNAME as string,
  password: process.env.DB_PASSWORD as string,
  database: process.env.DB_NAME as string,
  synchronize: process.env.DB_SYNC === 'true',
  logging: process.env.DB_LOGS === 'true',
  entities: [process.env.DB_ENTITIES_LOCATION || ''],
  migrations: [process.env.DB_MIGRATIONS_LOCATION || ''],
  cli: { migrationsDir: 'src/database/migrations' }
};

export = config;
