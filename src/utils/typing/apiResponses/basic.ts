export interface IGetNReviewsResponseDto {
  amount: number;
}

export interface IGetNthReviewResponseDto {
  targetPredefinedName: string;
  workplace: string;
  bounds: string;
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
  approved: 0 | 1 | -1;
}

export interface IProfileDto {
  profileId: string;
  name: string;
  photoUrl: string;
}

export interface ISimpleActionResponse {
  success: boolean;
}
