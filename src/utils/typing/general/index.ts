import { AxiosResponse } from 'axios';
import { ChangeEvent } from 'react';

import { ReviewApprovementStatus } from 'utils/enums';
import { IReviewCardCommonData } from './basic';

export type APIResponse<TDto = any> = Promise<AxiosResponse<TDto>>;

export interface AppProfileInfo {
  currentId: string;
  currentName: string;
  currentPhotoUrl: string;
}

export interface BindReviewTargetDto {
  reviewId: string;
  profileId: string;
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

export interface PrepareProfileDto {
  profileId: string;
  name: string;
  email: string;
  photoUrl: string;
  companySite: string;
  companyName: string;
  position: string;
  workStartMonth: number;
  workStartYear: number;
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
  approved: ReviewApprovementStatus;
}

export interface ReviewData {
  authorId: string;
  targetFirstName: string;
  targetLastName: string;
  workplace: string;
  bounds: string;
  tasks: string;
  strengths: string;
  improvements: string;
  results: string;
  levelMark: number;
  levelComment: string;
  activityMark: number;
  activityComment: string;
  ownHireOpinionMark: number;
  ownHireOpinionComment: string;
  qualityMark: number;
  qualityComment: string;
  leadershipMark: number;
  leadershipComment: string;
  adviceComment: string;
  recommenderLink1: string;
  recommenderLink2: string;
  recommenderLink3: string;
}

export interface SearchProfileInfo {
  name: string;
  photoUrl: string;
  company: {
    name: string;
    site: string;
  },
  position: string;
}

export type TextAreaEvent = ChangeEvent<HTMLTextAreaElement>;

export interface OptionType {
  key: any;
  text: string;
}
