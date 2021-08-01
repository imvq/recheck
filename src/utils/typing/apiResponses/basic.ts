import { IReviewCardLeftData } from '../general';

export interface IGetNReviewsResponseDto {
  amount: number;
}

export type IGetNthReviewResponseDto = IReviewCardLeftData;

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
