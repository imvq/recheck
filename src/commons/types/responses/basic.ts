import { IReviewCardLeftData } from '../general';

export interface IGetNReviewsResponseDto {
  amount: number;
}

export type IGetNthReviewResponseDto = IReviewCardLeftData;

export interface IRetrievedProfileDto {
  profileId: string;
  shareableId?: string;
  name: string;
  email?: string;
  position?: string;
  company?: string;
  photoUrl: string;
}

export interface ISimpleActionResponse {
  success: boolean;
}
