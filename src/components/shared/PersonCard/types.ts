import * as generalTypes from 'commons/types/general';

export interface IOwnProps {
  buttonText: string;
  onButtonClick(): void;
  userData: generalTypes.ISearchProfileInfo;
}

export type IProps = IOwnProps;
