import { ICompany, ISearchProfileInfo } from 'commons/types/general';

export interface IOwnProps {
  companies: ICompany[];
  setUserSearchResults(results: ISearchProfileInfo[]): void;
}

export type IProps = IOwnProps;
