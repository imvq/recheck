import * as generalTypes from 'utils/typing/general';

export interface IOwnProps {
  buttonText: string;
  onButtonClick(): void;
  userData: generalTypes.ISearchProfileInfo;
}

export type IProps = IOwnProps;
