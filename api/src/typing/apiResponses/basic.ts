export interface IGetNReviewsAmountResponseDto {
  amount: number;
}

export interface IGetNthReviewResponseDto {
  targetName: string;
  targetPhotoUrl: string;
  tasks: string;
  strengths: string;
  improvements: string;
  results: string;
  levelMark: number;
  levelComment: string;
  activityMark: number;
  activityComment: string;
  ownHireOpinionMark: number;
  ownHireOpinionComment: string;
  qualityMark: number;
  qualityComment: string;
  leadershipMark: number;
  leadershipComment: string;
  adviceComment: string;
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
