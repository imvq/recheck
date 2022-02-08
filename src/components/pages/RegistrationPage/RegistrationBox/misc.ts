import { validate as validateEmail } from 'email-validator';

import { ICompanyBasic, ICompany, IInputEvent, ISelectOptionType } from 'commons/types';

import { IEmailState } from './types';

export function findCompanyMatches(sequence: string, callback: (sequence: string) => void) {
  callback(sequence);
}

function inputHandler(event: IInputEvent, callback: (value: string) => void) {
  callback(event.target.value);
}

export function emailHandler(event: IInputEvent, callback: (email: IEmailState) => void) {
  callback({
    email: event.target.value,
    isEmailValid: validateEmail(event.target.value),
    isEmailValidationErrorVisible: false,
    isEmailAvailabilityErrorVisible: false
  });
}

export function companyNameSetter(name: string, callback: (company: ICompanyBasic) => void) {
  callback({ id: -1, name });
}

export function companyNameHandler(event: IInputEvent, callback: (company: ICompanyBasic) => void) {
  inputHandler(event, name => companyNameSetter(name, callback));
}

export function positionHandler(event: IInputEvent, callback: (position: string) => void) {
  inputHandler(event, callback);
}

/**
 * Get optionified companies datum.
 */
export function mapCompaniesDataToOptions(companies: ICompany[]) {
  return companies.map(
    company => ({
      key: company.id,
      text: company.name || '',
      imageUrl: company.logoUrl
    })
  );
}

/**
 * React when something is typed into companies input.
 */
export function companySelectorHandler(
  event: IInputEvent,
  companySetter: (company: ICompanyBasic) => void,
  matchedCompaniesLoader: (sequence: string) => void,
  matchedCompaniesEraser: () => void
) {
  companyNameHandler(event, companySetter);

  if (event.target.value) {
    findCompanyMatches(event.target.value, matchedCompaniesLoader);
    return;
  }

  matchedCompaniesEraser();
}

/**
 * Can the user proceed registration.
 */
export function canProceed(
  fullName: string,
  emailState: IEmailState,
  company: ICompanyBasic,
  position: string,
  currentWorkMonthFrom: number | null,
  currentWorkYearFrom: number | null
) {
  return fullName !== ''
    && emailState.isEmailValid
    && !emailState.isEmailAvailabilityErrorVisible
    && emailState.isEmailAvailabilityErrorVisible !== null
    && !!company && !!position
    && currentWorkMonthFrom !== null && currentWorkYearFrom !== null;
}
