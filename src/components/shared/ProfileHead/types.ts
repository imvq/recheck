import { IAppProfileInfoReduced } from 'commons/types/general';

export interface IOwnProps {
  profileInfo: IAppProfileInfoReduced;
  isSolid?: boolean;
  noButtons?: boolean;
}

export type IProps = IOwnProps;
