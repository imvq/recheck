import { IReviewReceived } from 'commons/types';

export interface IStateProps {
  privateToken: string | null;
  isAuthorized: boolean | null;
  isLoading: boolean;
  leftReviewsAmount: number;
  currentReviewData: IReviewReceived | null;
}

export interface IDispatchProps {
  loadTabData: (profileId: string) => void;
  loadNthReview: (profileId: string, nthReview: number) => void;
  lockPage(): void;
  unlockPage(): void;
  setColleagues(colleagues: Omit<ISearchProfileInfo, 'company'>[]): void;
}

export type IProps = IStateProps & IDispatchProps;
