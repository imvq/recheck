import { IReviewCardCommonData } from '../general/basic';

export interface IGetNReviewsResponseDto {
  amount: number;
}

export type IGetNthReviewResponseDto = IReviewCardCommonData;

export interface IProfileDto {
  profileId: string;
  name: string;
  email?: string;
  shareableId?: string;
  photoUrl: string;
}

export interface ISimpleActionResponse {
  success: boolean;
}
