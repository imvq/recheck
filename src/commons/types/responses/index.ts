import * as genearalTypes from '../general';

import { IGetNReviewsResponseDto, IGetNthReviewResponseDto, ISimpleActionResponse, IRetrievedProfileDto } from './basic';

export interface IBindReviewtargetResponseDto extends ISimpleActionResponse {}

export interface ICheckIsEmailAvailableResponseDto extends ISimpleActionResponse {}

export interface ICheckIsUserAvailableForReviewResponseDto extends ISimpleActionResponse {}

export interface ICheckIsUserCanBeViewedResponseDto extends ISimpleActionResponse {}

export interface ICheckIsRegisteredResponseDto {
  isRegistered: boolean;
}

export interface ICheckIsConfirmedResponseDto {
  isConfirmed: boolean;
}

export interface ICompleteRegistartionResponseDto extends ISimpleActionResponse {}

export interface IDoesUserHasAvailableProfilesViewsResponseDto extends ISimpleActionResponse {}

export interface IExchangeLinkedInCodeResposneDto {
  'li_at': string;
}

export interface IIsTargetConnectedResponseDto extends ISimpleActionResponse {}

export interface IGetColleaguesResponseDto {
  results: Omit<genearalTypes.ISearchProfileInfo, 'company'>[];
}

export type IGetProfileLinkedInDto = IRetrievedProfileDto;

export interface IGetMatchedCompaniesResponseDto {
  results: genearalTypes.ICompanyReduced[];
}

export interface IGetRecommendationsResponseDto {
  results: genearalTypes.ICompany[];
}

export type IGetNReviewsGotResponseDto = IGetNReviewsResponseDto;

export type IGetNReviewsLeftResponseDto = IGetNReviewsResponseDto;

export type IGetNthReviewGotResponseDto = IGetNthReviewResponseDto;

export type IGetNthReviewLeftResponseDto = IGetNthReviewResponseDto;

export type IGetTargetNReviewsGotResponseDto = IGetNReviewsResponseDto;

export type IGetTargetNthReviewGotResponseDto = IGetNthReviewResponseDto;

export type IMakeUserAvailableResponseDto = ISimpleActionResponse;

export type INofiyReferralResponseDto = ISimpleActionResponse;

export type IPrepareReviewResponseDto = ISimpleActionResponse;

export type IPrepareProfileResponseDto = ISimpleActionResponse;

export type IReassignConfirmationEmailResponseDto = ISimpleActionResponse;

export type IResendConfirmationResponseDto = ISimpleActionResponse;

export type ISearchUserResponseDto = genearalTypes.ISearchProfileInfo;
