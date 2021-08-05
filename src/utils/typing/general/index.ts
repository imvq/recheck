import { AxiosResponse } from 'axios';
import { ChangeEvent } from 'react';

import { IReviewCardCommonData } from './basic';

export type APIResponse<TDto = any> = Promise<AxiosResponse<TDto>>;

export interface IAppProfileInfo {
  currentId: string;
  currentName: string;
  currentEmail: string;
  currentShareableId: string;
  currentPhotoUrl: string;
}

export interface IAppProfileInfoReduced {
  currentName: string;
  currentPhotoUrl: string;
}

export interface IBindReviewTargetDto {
  reviewId: string;
  profileId: string;
}

export interface ICheckIsUserAvailableForReviewDto {
  askerProfileId: string;
  targetShareableId: string;
}

export type ICompanyMember = Omit<ISearchProfileInfo, 'company'>;

export interface ICompany {
  id: string;
  name: string;
  logoUrl: string | null;
  members: ICompanyMember[];
}

export interface ICompanyReduced {
  id: string;
  name: string;
  logoUrl: string | null;
}

export interface ICompleteRegistrationDto {
  profileId: string;
  confirmationCode: string;
}

export interface IDemoReviewCardData {
  name: string;
  photoUrl: string;
  position: string;
  company: string;
  experience: string;
  review: string;
  nReviews: number;
}

export type IInputEvent = ChangeEvent<HTMLInputElement>;

export interface IGetConnectedUserDataDto {
  askerProfileId: string;
  targetShareableId: string;
}

export interface IGetNReviewsGotDto {
  profileId: string;
}

export interface IGetNReviewsLeftDto {
  profileId: string;
}

export interface IGetNthReviewGotDto {
  profileId: string;
  nthReview: number;
}

export interface IGetNthReviewLeftDto {
  profileId: string;
  nthReview: number;
}

export interface IGetTargetNReviewsGotDto {
  askerProfileId: string;
  targetShareableId: string;
}

export interface IOptionType {
  key: any;
  text: string;
}

export interface IExtendedOptionType extends IOptionType {
  imageUrl: string | null;
}

export interface IMakeUserAvailableDto {
  askerProfileId: string;
  targetShareableId: string;
}

export interface INotifyReferralDto {
  referralEmail: string;
  targetName: string;
  targetEmail: string;
}

export interface IPrepareProfileDto {
  profileId: string;
  name: string;
  email: string;
  photoUrl: string;
  company: {
    id: number;
    name: string;
  };
  position: string;
  workStartMonth: number;
  workStartYear: number;
  referral: string | null;
}

export interface IPreviousSearchCardData {
  name: string;
  position: string;
  company: string;
  photoUrl: string;
}

export interface IReassignConfirmationEmailDto {
  profileId: string;
  email: string;
}

export interface IReviewCardGotData extends IReviewCardCommonData {}

export interface IReviewCardLeftData extends IReviewCardCommonData {}

export interface IReviewCardDataFull {
  name: string;
  photoUrl: string;
  position: string;
  company: string;
  experience: string;
  review: string;
  nReviews: number;
  questions: string[];
}

export interface IReviewData {
  authorId: string;
  targetShareableId: string;
  tasks: string;
  strengths: string;
  recommendation: string;
  recommendationMark: number;
}

export interface ISearchProfileInfo {
  name: string;
  shareableId: string;
  photoUrl: string;
  company?: string;
  position: string;
}

export type ITextAreaEvent = ChangeEvent<HTMLTextAreaElement>;
