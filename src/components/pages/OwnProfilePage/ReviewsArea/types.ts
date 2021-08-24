import { IReviewCardLeftData, ISearchProfileInfo } from 'commons/types/general';

export interface IStateProps {
  currentProfileId: string;
  isAuthorized: boolean | null;
  isLoading: boolean;
  reviewsLeftChunksAmount: number;
  currentReviewCardData: IReviewCardLeftData | null;
}

export interface IDispatchProps {
  loadTabData: (profileId: string) => void;
  loadNthReview: (profileId: string, nthReview: number) => void;
  lockPage(): void;
  unlockPage(): void;
  setColleagues(colleagues: Omit<ISearchProfileInfo, 'company'>[]): void;
}

export type IProps = IStateProps & IDispatchProps;
