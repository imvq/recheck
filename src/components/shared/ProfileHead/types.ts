import { ISearchProfileData } from 'commons/types';

export interface IOwnProps {
  profileInfo: ISearchProfileData;
  isSolid?: boolean;
  noButtons?: boolean;
}

export type IProps = IOwnProps;
