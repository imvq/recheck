import { Company, SearchProfileInfo } from 'utils/typing/general';

export interface IOwnProps {
  recommendations: Company[];
  loadNextChunkCallback(chunk: number): void;
  onClose(): void;
}

export interface IStateProps {
  recommendedCompaniesShownMembers: SearchProfileInfo[];
}

export interface IDispatchProps {
  setRecommendedCompaniesShownMembers(members: SearchProfileInfo[]): void;
}

export type IProps = IOwnProps & IStateProps & IDispatchProps;
