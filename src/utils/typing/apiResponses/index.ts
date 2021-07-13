import * as genearalTypes from '../general';
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

export interface IsTargetConnectedResponseDto extends ISimpleActionResponse {}

export interface GetMatchedCompaniesDto {
  results: genearalTypes.CompanyReduced[];
}

export interface GetRecommendationsDto {
  results: genearalTypes.Company[];
}

export type GetNReviewsGotResponseDto = IGetNReviewsResponseDto;

export type GetNReviewsLeftResponseDto = IGetNReviewsResponseDto;

export type GetNthReviewGotResponseDto = IGetNthReviewResponseDto;

export type GetNthReviewLeftResponseDto = IGetNthReviewResponseDto;

export type LinkedInProfileDto = IProfileDto;

export type FacebookProfileDto = IProfileDto;

export type FacebookProfileReducedDto = Omit<
  FacebookProfileDto,
  'profileId'
  | 'name'
  | 'photoUrl'
>;

export type NofiyReferralResponseDto = ISimpleActionResponse;

export type PrepareReviewResponseDto = ISimpleActionResponse;

export type PrepareProfileResponseDto = ISimpleActionResponse;

export type SearchUserDto = genearalTypes.SearchProfileInfo;
