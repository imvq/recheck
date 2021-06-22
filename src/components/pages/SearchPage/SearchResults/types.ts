import { SearchProfileInfo } from 'utils/typing/general';

export interface IOwnProps {
  userSearchResults: { results : SearchProfileInfo[]; };
}

export type IProps = IOwnProps;
