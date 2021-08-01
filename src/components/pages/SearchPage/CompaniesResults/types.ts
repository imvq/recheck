import * as generalTypes from 'utils/typing/general';

export interface IOwnProps {
  companies: generalTypes.ICompany[];
  setUserSearchResults(results: generalTypes.ISearchProfileInfo[]): void;
}

export type IProps = IOwnProps;
