import { AppProfileInfo, SearchProfileInfo } from 'utils/typing/general';

export interface IStateProps {
  colleaguesState: {
    colleagues: Omit<SearchProfileInfo, 'company'>[];
    areLoaded: boolean;
  }
  currentProfileInfo: AppProfileInfo;
}

export interface IDispatchProps {
  lockPage(): void;
  unlockPage(): void;
}

export type IProps = IStateProps & IDispatchProps;
