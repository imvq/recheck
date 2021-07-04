import UserManager from '@database/managers/UserManager';

export async function getSavedUserEmail(profileId: string) {
  return (await UserManager.getUser(profileId))?.email;
}
