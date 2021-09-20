import * as accessors from '@business/database/accessors';

import { database } from '@business/preloaded';

export async function saveName(userId: string, fullName: string) {
  const tokens = fullName.toLocaleLowerCase().replace(/\s\s+/g, ' ').split(' ');

  tokens.forEach(async token => {
    const tokenEntity = await getEntityRepresentationOf(token);
    await database.one(accessors.sqlCreateNameTokenBinding, { userId, tokenId: tokenEntity.id });
  });
}

async function getEntityRepresentationOf(tokenValue: string) {
  const token = await database.oneOrNone<{ id: string; }>(
    accessors.sqlFindNameToken,
    { tokenValue }
  );

  if (!token) {
    return database.one<{ id: string; }>(accessors.sqlCreateNameToken, { tokenValue });
  }

  return token;
}
