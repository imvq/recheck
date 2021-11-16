import * as accessors from '@business/database/accessors';

/**
 * To provide user search users' full names are aplit by tokens.
 * Users with similar parts in their names are linked to the same name tokens.
 * Therefore, providing pieces of someone's name it is possible to get several
 * users with similar names.
 *
 * When a new user is registered, their names are split and bound to name tokens from the DB.
 * If there is no name token for the piece of name it is created and then connected to the user.
 */
export async function saveName(userId: string, fullName: string) {
  const tokens = fullName.toLocaleLowerCase().replace(/\s\s+/g, ' ').split(' ');

  tokens.forEach(async token => {
    const tokenEntity = await getEntityRepresentationOf(token);
    await accessors.createNameTokenBinding(userId, tokenEntity.id);
  });
}

async function getEntityRepresentationOf(tokenValue: string) {
  return await accessors.readNameToken(tokenValue) || accessors.createNameToken(tokenValue);
}
