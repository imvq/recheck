export interface IGetNReviewsAmountResponseDto {
  amount: number;
}

export interface IGetNthReviewResponseDto {
  targetName: string;
  targetPhotoUrl: string;
  targetPosition: string;
  targetCompanyName: string;
  tasks: string;
  strengths: string;
  recommendation: string;
  recommendationMark: number;
}

export interface IReducedMember {
  name: string;
  shareableId: string;
  photoUrl: string;
  position: string;
}

export interface IRetrieveProfileInfoResponseDto {
  profileId: string;
  shareableId?: string;
  name: string;
  email?: string;
  company?: string;
  position?: string;
  photoUrl: string;
}

export interface ISimpleActionResponse {
  success: boolean;
}
