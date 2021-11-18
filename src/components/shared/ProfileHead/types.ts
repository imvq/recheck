import { ISearchedProfile } from 'commons/types';

export interface IOwnProps {
  profileInfo: ISearchedProfile;
  isSolid?: boolean;
  noButtons?: boolean;
}

export type IProps = IOwnProps;
