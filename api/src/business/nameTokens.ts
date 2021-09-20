import * as accessors from '@business/database/accessors';

import { database } from '@business/preloaded';

export async function saveName(userId: string, fullName: string) {
  const tokens = fullName.toLocaleLowerCase().replace(/\s\s+/g, ' ').split(' ');

  tokens.forEach(token => {

  });
}

async function getEntityRepresentationOf(tokenValue: string) {
  const token = await database.oneOrNone(accessors.sqlFindNameToken, { tokenValue });

  if (!token) {
    return database.one(accessors.sqlCreateNameToken, { tokenValue });
  }

  return token;
}
