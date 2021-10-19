import { AxiosResponse } from 'axios';
import { ChangeEvent } from 'react';

export type ApiPromise<TDto = any> = Promise<AxiosResponse<TDto>>;

export interface ICompanyBasic {
  id: string | number;
  name: string | null;
}

export interface ICompany extends ICompanyBasic {
  logoUrl: string | null;
}

export interface ISelectOptionType {
  key: any;
  text: string;
}

export interface IUserSelf {
  registered: boolean;
  privateToken: string;
  shareableId: string;
  socialId: string;
  fullName: string;
  email: string;
  photoUrl: string;
  currentPosition: string;
  currentWorkYearFrom: number;
  currentWorkMonthFrom: number;
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
  company: ICompanyBasic;
  currentWorkYearFrom: number;
  currentWorkMonthFrom: number;
}

export type IInputEvent = ChangeEvent<HTMLInputElement>;
