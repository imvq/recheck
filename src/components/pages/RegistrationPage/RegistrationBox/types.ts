import { RegistrationDto } from 'utils/types.common';

export interface IOwnProps {
  onProceed(collectedInfo: RegistrationDto): void;
}

export type IProps = IOwnProps;
