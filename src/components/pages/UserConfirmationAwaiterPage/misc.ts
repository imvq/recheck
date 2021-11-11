import { IEmailState } from './types';

export function canProceed(emailState: IEmailState) {
  return emailState.isEmailValid
    && !emailState.isEmailAvailabilityErrorVisible
    && emailState.isEmailAvailabilityErrorVisible !== null;
}
