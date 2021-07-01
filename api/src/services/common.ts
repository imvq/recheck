import { Errors } from 'typescript-rest';

import UserManager from '@database/managers/UserManager';

export async function getSavedUserEmail(profileId: string) {
  const savedUser = await UserManager.getUser(profileId);
  if (!savedUser) throw new Errors.UnauthorizedError('No user with such email');

  return savedUser.email;
}
