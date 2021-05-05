import { IProfileDto, ISimpleActionResponse } from './basic';

export interface CheckIsRegisteredResponseDto {
  isRegistered: boolean;
}

export interface ExchangeLinkedInCodeResposneDto {
  'li_at': string;
}

export type LinkedInProfileDto = IProfileDto;

export type FacebookProfileDto = IProfileDto;

export type PrepareReviewResponseDto = ISimpleActionResponse;

export type PrepareUserResponseDto = ISimpleActionResponse;

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
