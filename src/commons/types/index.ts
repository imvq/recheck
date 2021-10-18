import { AxiosResponse } from 'axios';

export type ApiPromise<TDto = any> = Promise<AxiosResponse<TDto>>;

export interface IUserSelf {
  privateToken: string;
  shareableId: string;
  socialId: string;
  fullName: string;
  email: string;
  photoUrl: string;
  currentPosition: string;
  currentWorkStartYear: number;
  currentWorkStartMonth: number;
  companyId: string;
  companyName: string;
}

export interface IUserPreparationData {
  socialId: string;
  inviterId: string | null;
  fullName: string;
  email: string;
  photoUrl: string | null;
  currentPosition: string;
  companyId: string;
  createdCompanyName: string | null;
  currentWorkYearFrom: number;
  currentWorkMonthFrom: number;
}
