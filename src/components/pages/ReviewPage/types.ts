import * as generalTypes from 'utils/typing/general';
import { MainToolbarEntry } from 'utils/enums';

export interface IStateProps {
  currentProfileInfo: generalTypes.AppProfileInfo;
  reviewData: Omit<generalTypes.ReviewData, 'authorId'>;
}

export interface IDispatchProps {
  setCurrentMainToolbarEntry(entry: MainToolbarEntry): void;
  createReview(reviewData: generalTypes.ReviewData): void;
  setTargetShareableId(id: string): void;
  unlockPage(): void;
}

export type IProps = IStateProps & IDispatchProps;
