import * as genearalTypes from '../general';
import { IGetNReviewsResponseDto, IGetNthReviewResponseDto, IProfileDto, ISimpleActionResponse } from './basic';

export interface BindReviewtargetResponseDto extends ISimpleActionResponse {}

export interface CheckIsEmailAvailableResponseDto extends ISimpleActionResponse {}

export interface CheckIsUserAvailableForReviewResponseDto extends ISimpleActionResponse {}

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

export interface GetColleaguesResponseDto {
  results: Omit<genearalTypes.ISearchProfileInfo, 'company'>[];
}

export interface GetMatchedCompaniesResponseDto {
  results: genearalTypes.ICompanyReduced[];
}

export interface GetRecommendationsResponseDto {
  results: genearalTypes.ICompany[];
}

export type GetNReviewsGotResponseDto = IGetNReviewsResponseDto;

export type GetNReviewsLeftResponseDto = IGetNReviewsResponseDto;

export type GetNthReviewGotResponseDto = IGetNthReviewResponseDto;

export type GetNthReviewLeftResponseDto = IGetNthReviewResponseDto;

export type GetTargetNReviewsGotResponseDto = IGetNReviewsResponseDto;

export type LinkedInProfileDto = IProfileDto;

export type FacebookProfileDto = IProfileDto;

export type FacebookProfileReducedDto = Omit<
  FacebookProfileDto,
  'profileId'
  | 'name'
  | 'photoUrl'
>;

export type IMakeUserAvailableResponseDto = ISimpleActionResponse;

export type NofiyReferralResponseDto = ISimpleActionResponse;

export type PrepareReviewResponseDto = ISimpleActionResponse;

export type PrepareProfileResponseDto = ISimpleActionResponse;

export type ReassignConfirmationEmailResponseDto = ISimpleActionResponse;

export type ResendConfirmationResponseDto = ISimpleActionResponse;

export type SearchUserDto = genearalTypes.ISearchProfileInfo;
