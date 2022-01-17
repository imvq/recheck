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

export interface ICompanyWithMembers extends ICompany {
  members: ISearchedProfileBasic[];
}

export interface IDemoReviewCardData {
  name: string;
  photoUrl: string;
  position: string;
  company: string;
  review: string;
  nReviews: number;
}

export interface IExtendedOptionType extends IOptionType {
  imageUrl: string | null;
}

export type IInputEvent = ChangeEvent<HTMLInputElement>;

export type ITextAreaEvent = ChangeEvent<HTMLTextAreaElement>;

export interface IOptionType {
  key: any;
  text: string;
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

export interface IReviewCreated {
  questions: string[];
  comments: string[];
  marks: (number | null)[];
}

export interface IReviewCreator {
  (
    privateToken: string,
    targetShareableId: string,
    reviewData: IReviewCreated,
    callback?: () => void
  ): void;
}

export interface IReviewParsed {
  targetShareableId: string;
  targetPhotoUrl: string;
  targetName: string;
  targetPosition: string;
  targetCompanyName: string;
  date: string;
  questions: string[];
  answers: string[];
  marks: (number | null)[];
}

export interface IReviewReceived {
  targetShareableId: string;
  targetPhotoUrl: string;
  targetName: string;
  targetPosition: string;
  targetCompanyName: string;
  date: string;
  content: string;
}

export interface ISearchedProfileBasic {
  fullName: string;
  shareableId: string;
  photoUrl: string;
  currentPosition: string;
}

export interface ISearchedProfile extends ISearchedProfileBasic {
  currentCompanyId: string | number;
  currentCompanyName: string;
}

export interface IDisplayedProfileHeadInfo {
  fullName: string;
  photoUrl: string;
  currentPosition: string;
  currentCompanyName: string;
}

export interface ISelectOptionType {
  key: any;
  text: string;
}

export interface IUserSelf {
  registered: boolean;
  confirmed: boolean;
  privateToken?: string;
  shareableId?: string;
  socialId: string;
  fullName?: string;
  email?: string;
  photoUrl?: string;
  currentPosition?: string;
  currentWorkYearFrom?: number;
  currentWorkMonthFrom?: number;
  currentCompanyId?: string;
  currentCompanyName?: string;
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
