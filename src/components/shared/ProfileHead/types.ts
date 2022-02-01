import { IDisplayedProfileHeadInfo } from 'commons/types';

export interface IOwnProps {
  profileInfo: IDisplayedProfileHeadInfo;
  isSolid?: boolean;
}

export interface IStateProps {}

export interface IDispatchProps {}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
