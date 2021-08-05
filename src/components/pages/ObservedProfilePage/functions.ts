import { ISearchProfileInfo } from 'utils/typing/general';

export function mapProfileInfoToIAppProfileInfoSlice(info: ISearchProfileInfo) {
  return {
    currentName: info.name,
    currentPhotoUrl: info.photoUrl
  };
}
