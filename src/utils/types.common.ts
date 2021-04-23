import { ChangeEvent } from 'react';
import { AxiosResponse } from 'axios';

import { ReviewStatus } from './enums';

// ==================== Utility types ====================

export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type Maybe<T> = Nullable<T> | Optional<T>;
export type APIResponse<TDto = any> = Promise<AxiosResponse<TDto>>;

export interface OptionType {
  key: any;
  text: string;
}

export interface Setter<TValue> {
  (newValue: TValue): void;
}

export type InputEvent = ChangeEvent<HTMLInputElement>;

export type TextAreaEvent = ChangeEvent<HTMLTextAreaElement>;

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
  company: string;
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

export interface PreviousSearchCardData {
  name: string;
  position: string;
  company: string;
  photoUrl: string;
}

export interface ProfileDto {
  profileId: string;
  name: string;
  email: string;
  photoUrl: string;
  isRegistered: boolean;
}

export interface ProfileInfo {
  currentId: string;
  currentName: string;
  currentEmail: string;
  currentPhotoUrl: string;
}

export interface RegistrationDto {
  email: string;
  companySite: string;
  companyName: string;
  position: string;
  workStartMonth: number;
  workStartYear: number;
}
