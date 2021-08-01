import { ISearchProfileInfo } from 'utils/typing/general';

export function mapUserSearchDataToOptions(users: ISearchProfileInfo[]) {
  return users.map(user => ({
    key: Math.random(),
    text: user.name,
    imageUrl: user.photoUrl
  }));
}
