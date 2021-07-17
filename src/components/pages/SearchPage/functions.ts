import { SearchProfileInfo } from 'utils/typing/general';

export function mapUserSearchDataToOptions(users: SearchProfileInfo[]) {
  return users.map(user => ({
    key: Math.random(),
    text: user.name,
    imageUrl: user.photoUrl
  }));
}
