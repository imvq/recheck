import { IProfileDto, ISimpleActionResponse } from './basic';

export interface BindReviewtargetResponseDto extends ISimpleActionResponse {}

export interface CheckIsRegisteredResponseDto {
  isRegistered: boolean;
}

export interface CheckIsConfirmedResponseDto {
  isConfirmed: boolean;
}

export interface CompleteRegistartionResponseDto extends ISimpleActionResponse {}

export interface ExchangeLinkedInCodeResposneDto {
  'li_at': string;
}

export type LinkedInProfileDto = IProfileDto;

export type FacebookProfileDto = IProfileDto;

export type PrepareReviewResponseDto = ISimpleActionResponse;

export type PrepareProfileResponseDto = ISimpleActionResponse;
