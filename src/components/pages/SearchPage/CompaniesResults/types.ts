import * as generalTypes from 'commons/types/general';

export interface IOwnProps {
  companies: generalTypes.ICompany[];
  setUserSearchResults(results: generalTypes.ISearchProfileInfo[]): void;
}

export type IProps = IOwnProps;
