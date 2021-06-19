import { Company } from 'utils/typing/general';

export interface IOwnProps {
  recommendations: Company[];
  onClose(): void;
}

export type IProps = IOwnProps;
