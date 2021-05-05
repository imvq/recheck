import { ChangeEvent } from 'react';
import { AxiosResponse } from 'axios';

import { ReviewStatus } from './enums';

// ==================== Utility types ====================

export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type Maybe<T> = Nullable<T> | Optional<T>;
export type APIResponse<TDto = any> = Promise<AxiosResponse<TDto>>;

export interface AppProfileInfo {
  currentId: string;
  currentName: string;
  currentPhotoUrl: string;
}

export interface OptionType {
  key: any;
  text: string;
}

export interface Setter<TValue> {
  (newValue: TValue): void;
}

interface SimpleActionResponse {
  success: boolean;
}

export type InputEvent = ChangeEvent<HTMLInputElement>;

export type TextAreaEvent = ChangeEvent<HTMLTextAreaElement>;

export interface CheckIsRegisteredResponseDto {
  isRegistered: boolean;
}

export interface ExchangeLinkedInCodeResposneDto {
  'li_at': string;
}

interface ProfileDto {
  profileId: string;
  name: string;
  photoUrl: string;
}

export type LinkedInProfileDto = ProfileDto;
export type FacebookProfileDto = ProfileDto;

export interface ReviewCardData {
  name: string;
  photoUrl: string;
  position: string;
  company: string;
  experience: string;
  review: string;
  nReviews: number;
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

export interface ReviewCardDataFull extends ReviewCardData {
  questions: string[];
  status: ReviewStatus;
}

export type PrepareUserResponseDto = SimpleActionResponse;

export type PrepareReviewResponseDto = SimpleActionResponse;

export interface PreviousSearchCardData {
  name: string;
  position: string;
  company: string;
  photoUrl: string;
}

export interface RegistrationDto {
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
