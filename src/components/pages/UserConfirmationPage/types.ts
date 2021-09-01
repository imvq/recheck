import { IReviewData } from 'commons/types/general';

export interface IStateProps {
  isAuthorized: boolean | null;
  currentProfileId: string;
}

export interface IDispatchProps {
  setIsLoginPopupVisible(flag: boolean): void;
  createReview(reviewData: IReviewData): void;
  unlockPage(): void;
}

export type IProps = IStateProps & IDispatchProps;
