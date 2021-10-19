import { validate as validateEmail } from 'email-validator';

import { ICompanyBasic, ICompany, IInputEvent, ISelectOptionType } from 'commons/types';

import { IEmailState } from './types';

export const months: ISelectOptionType[] = [
  { key: 0, text: 'Январь' },
  { key: 1, text: 'Февраль' },
  { key: 2, text: 'Март' },
  { key: 3, text: 'Апрель' },
  { key: 4, text: 'Май' },
  { key: 5, text: 'Июнь' },
  { key: 6, text: 'Июль' },
  { key: 7, text: 'Август' },
  { key: 8, text: 'Сентябрь' },
  { key: 9, text: 'Октябрь' },
  { key: 10, text: 'Ноябрь' },
  { key: 11, text: 'Декабрь' },
];

// 50 years till current year.
const yearsDown = Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i);

// Optionified years array.
export const years = yearsDown.map((value, index) => ({ key: index, text: value.toString() }));

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

export function monthHandler(option: ISelectOptionType, callback: (month: number) => void) {
  callback(option.key);
}

export function yearHandler(option: ISelectOptionType, callback: (year: number) => void) {
  callback(Number.parseInt(option.text));
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
  currentWorkMonthFrom: number,
  currentWorkYearFrom: number
) {
  return fullName !== ''
    && emailState.isEmailValid
    && !emailState.isEmailAvailabilityErrorVisible
    && emailState.isEmailAvailabilityErrorVisible !== null
    && !!company && !!position
    && currentWorkMonthFrom > -1 && currentWorkYearFrom > -1;
}
