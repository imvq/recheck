import { IAppProfileInfo } from 'utils/typing/general';

export interface IStateProps {
  currentProfileInfo: IAppProfileInfo;
  isAuthorized: boolean | null;
  isLoading: boolean;
  isObservedReviewsPageLoading: boolean;
  observedReviewsChunksAmount: number;
}

export interface IDispatchProps {
  loadObservedReviewsData(askerProfileId: string, targetShareableId: string): void;
  setIsLoading(): void;
  unlockPage(): void;
}

export type IProps = IStateProps & IDispatchProps;
