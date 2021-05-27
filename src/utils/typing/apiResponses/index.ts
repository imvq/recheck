import * as GenearalTypes from '../general';
import { IGetNReviewsResponseDto, IGetNthReviewResponseDto, IProfileDto, ISimpleActionResponse } from './basic';

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

export type GetNReviewsGotResponseDto = IGetNReviewsResponseDto;

export type GetNReviewsLeftResponseDto = IGetNReviewsResponseDto;

export type GetNthReviewGotResponseDto = IGetNthReviewResponseDto;

export type GetNthReviewLeftResponseDto = IGetNthReviewResponseDto;

export type LinkedInProfileDto = IProfileDto;

export type FacebookProfileDto = IProfileDto;

export type PrepareReviewResponseDto = ISimpleActionResponse;

export type PrepareProfileResponseDto = ISimpleActionResponse;

export type SearchUserDto = GenearalTypes.SearchProfileInfo;
