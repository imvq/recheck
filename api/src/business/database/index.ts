import pgp, { IInitOptions } from 'pg-promise';

import { ILogger } from '@typing';

export * from './accessors';

export default function getDatabase(logger: ILogger | null) {
  const initOptionsDev: IInitOptions = {
    query: (queryObject) => (logger as ILogger).log(queryObject.query)
  };

  const initializedPgp = pgp(process.env.NODE_ENV !== 'production' ? initOptionsDev : {});

  const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

  return initializedPgp(
    `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
  );
}
