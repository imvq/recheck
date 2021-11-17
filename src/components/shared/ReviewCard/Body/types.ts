import { IReviewParsed } from 'commons/types';

export interface IOwnProps {
  reviewCardData: IReviewParsed;
}

export interface IStateProps {}

export interface IDispatchProps {}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
