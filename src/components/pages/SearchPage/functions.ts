import { ISearchProfileInfo } from 'commons/types/general';

export function mapUserSearchDataToOptions(users: ISearchProfileInfo[]) {
  return users.map(user => ({
    key: user.shareableId,
    text: user.name,
    imageUrl: user.photoUrl
  }));
}
