import { SearchProfileInfo } from 'utils/typing/general';

export interface IStateProps {
  colleagues: Omit<SearchProfileInfo, 'company'>[];
}

export type IProps = IStateProps;
