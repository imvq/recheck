import { AxiosResponse } from 'axios';
import { ChangeEvent } from 'react';

import { IReviewCardCommonData } from './basic';

export type APIResponse<TDto = any> = Promise<AxiosResponse<TDto>>;

export interface AppProfileInfo {
  currentId: string;
  currentName: string;
  currentEmail: string;
  currentShareableId: string;
  currentPhotoUrl: string;
}

export interface BindReviewTargetDto {
  reviewId: string;
  profileId: string;
}

export interface Company {
  id: string;
  name: string;
  logoUrl: string | null;
  members: {
    name: string;
    email: string;
    photoUrl: string;
    position: string;
  }[];
}

export interface CompanyReduced {
  id: string;
  name: string;
  logoUrl: string | null;
}

export interface CompleteRegistrationDto {
  profileId: string;
  confirmationCode: string;
}

export interface DemoReviewCardData {
  name: string;
  photoUrl: string;
  position: string;
  company: string;
  experience: string;
  review: string;
  nReviews: number;
}

export type InputEvent = ChangeEvent<HTMLInputElement>;

export interface GetConnectedUserDataDto {
  askerProfileId: string;
  targetShareableId: string;
}

export interface GetNReviewsGotDto {
  profileId: string;
}

export interface GetNReviewsLeftDto {
  profileId: string;
}

export interface GetNthReviewGotDto {
  profileId: string;
  nthReview: number;
}

export interface GetNthReviewLeftDto {
  profileId: string;
  nthReview: number;
}

export interface OptionType {
  key: any;
  text: string;
}

export interface ExtendedOptionType extends OptionType {
  logoUrl: string | null;
}

export interface NotifyReferralDto {
  referralEmail: string;
  targetName: string;
  targetEmail: string;
}

export interface PrepareProfileDto {
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

export interface PreviousSearchCardData {
  name: string;
  position: string;
  company: string;
  photoUrl: string;
}

export interface ReviewCardGotData extends IReviewCardCommonData {}

export interface ReviewCardLeftData extends IReviewCardCommonData {}

export interface ReviewCardDataFull {
  name: string;
  photoUrl: string;
  position: string;
  company: string;
  experience: string;
  review: string;
  nReviews: number;
  questions: string[];
}

export interface ReviewData {
  authorId: string;
  targetShareableId: string;
  tasks: string;
  strengths: string;
  recommendation: string;
  recommendationMark: number;
}

export interface SearchProfileInfo {
  name: string;
  email: string;
  photoUrl: string;
  company: string;
  position: string;
}

export type TextAreaEvent = ChangeEvent<HTMLTextAreaElement>;

export interface UserCardData {
  name: string;
  email: string;
  photoUrl: string;
  position: string;
}
