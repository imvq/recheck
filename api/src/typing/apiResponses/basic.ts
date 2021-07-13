export interface IGetNReviewsAmountResponseDto {
  amount: number;
}

export interface IGetNthReviewResponseDto {
  targetName: string;
  targetPhotoUrl: string;
  tasks: string;
  strengths: string;
  recommendation: string;
  recommendationMark: number;
}

export interface IRetrieveProfileInfoResponseDto {
  profileId: string;
  shareableId?: string;
  name: string;
  email?: string;
  photoUrl: string;
}

export interface ISimpleActionResponse {
  success: boolean;
}
