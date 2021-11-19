import { IReviewReceived } from 'commons/types';

export interface IOwnProps {
  reviewCardData: IReviewReceived;
  showTarget?: boolean;
}

export interface IStateProps {}

export interface IDispatchProps {}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
