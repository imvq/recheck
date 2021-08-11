import { IAppProfileInfo } from 'utils/typing/general';

export interface IStateProps {
  currentProfileInfo: IAppProfileInfo;
  isAuthorized: boolean | null;
  isObservedReviewsPageLoading: boolean;
  observedReviewsChunksAmount: number;
}

export interface IDispatchProps {
  loadObservedReviewsData(askerProfileId: string, targetShareableId: string): void;
  unlockPage(): void;
}

export type IProps = IStateProps & IDispatchProps;
