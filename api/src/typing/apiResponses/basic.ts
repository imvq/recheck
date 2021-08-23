// This module contains types for Swagger docs auto-generating.
// There are some restrictions for types here:
// 1) no generics;
// 2) no classes;
// 3) no array/functional interfaces.

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

export interface ISimpleActionResponseDto {
  success: boolean;
}
