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

export interface IRetrievedProfileData {
  registered: boolean;
  confirmed: boolean;
  socialId: string;
  privateToken?: string;
  shareableId?: string;
  fullName?: string;
  email?: string;
  photoUrl?: string;
  currentPosition?: string;
  currentWorkYearFrom?: string;
  currentWorkMonthFrom?: string;
  currentCompanyId?: string;
  currentCompanyName?: string;
}

export interface IReviewData {
  targetShareableId: string;
  tasks: string;
  strengths: string;
  recommendation: string;
  recommendationMark: number;
}

export interface ICreatedReviewData extends IReviewData {
  privateToken: string;
}

export interface ISearchProfileData {
  fullName: string;
  shareableId: string;
  photoUrl: string;
  currentPosition: string;
  currentCompanyId: string;
  currentCompanyName: string;
}

export interface ISelectOptionType {
  key: any;
  text: string;
}

export interface IUserSelf {
  registered: boolean;
  confirmed: boolean;
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
