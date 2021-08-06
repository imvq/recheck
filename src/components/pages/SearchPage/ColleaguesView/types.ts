import { IAppProfileInfo, ISearchProfileInfo } from 'utils/typing/general';

export interface IStateProps {
  colleaguesState: {
    colleagues: ISearchProfileInfo[];
    areLoaded: boolean;
  }
  currentProfileInfo: IAppProfileInfo;
}

export interface IDispatchProps {
  lockPage(): void;
  unlockPage(): void;
}

export type IProps = IStateProps & IDispatchProps;
