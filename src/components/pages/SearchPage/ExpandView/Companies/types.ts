import { Company } from 'utils/typing/general';

export interface IOwnProps {
  recommendations: Company[];
  loadNextChunkCallback(chunk: number): void;
  onClose(): void;
}

export type IProps = IOwnProps;
