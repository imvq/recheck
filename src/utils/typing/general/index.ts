import { AxiosResponse } from 'axios';
import { ChangeEvent } from 'react';

import { ReviewStatus } from 'utils/enums';

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

export type InputEvent = ChangeEvent<HTMLInputElement>;

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

export interface ReviewCardData {
  name: string;
  photoUrl: string;
  position: string;
  company: string;
  experience: string;
  review: string;
  nReviews: number;
}

export interface ReviewCardDataFull extends ReviewCardData {
  questions: string[];
  status: ReviewStatus;
}

export interface ReviewData {
  firstName: string;
  lastName: string;
  companyName: string;
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

export type TextAreaEvent = ChangeEvent<HTMLTextAreaElement>;

export interface OptionType {
  key: any;
  text: string;
}
