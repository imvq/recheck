import { IDemoReviewCardData } from 'commons/types';

export interface IOwnProps extends IDemoReviewCardData {}

export interface IStateProps {}

export interface IDispatchProps {}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
