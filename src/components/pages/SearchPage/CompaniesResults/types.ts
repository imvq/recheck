import * as generalTypes from 'utils/typing/general';

export interface IOwnProps {
  companies: generalTypes.Company[];
  setUserSearchResults(results: generalTypes.SearchProfileInfo[]): void;
}

export type IProps = IOwnProps;
