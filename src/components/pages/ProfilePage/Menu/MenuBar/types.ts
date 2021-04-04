import { ProfileMenuEntry } from 'utils/enums';

export interface IStateProps {
  currentMenuProfileEntry: ProfileMenuEntry;
}

export interface IDispatchProps {
  setCurrentMenuProfileEntry: (entry: ProfileMenuEntry) => void;
}

export type IProps = IStateProps & IDispatchProps;
