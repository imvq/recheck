import { IAppProfileInfoReduced } from 'commons/types/general';

export interface IOwnProps {
  profileInfo: IAppProfileInfoReduced;
  noButtons?: boolean;
}

export type IProps = IOwnProps;
