import { IReviewFormData } from 'commons/types';

export interface IOwnProps {
  reviewFormData: IReviewFormData;
}

export interface IStateProps {
  shareableId: string | null;
}

export interface IDispatchProps {}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
