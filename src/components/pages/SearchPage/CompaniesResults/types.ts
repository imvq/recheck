import { Company } from 'utils/typing/general';

export interface IOwnProps {
  companies: Company[];
  loadNextChunkCallback(chunk: number): void;
}

export type IProps = IOwnProps;
