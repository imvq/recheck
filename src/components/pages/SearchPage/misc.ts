import { ISearchedProfileBasic } from 'commons/types';

export function mapUserSearchDataToOptions(users: ISearchedProfileBasic[]) {
  return users.map(user => ({
    key: user.shareableId,
    text: user.fullName,
    imageUrl: user.photoUrl
  }));
}
