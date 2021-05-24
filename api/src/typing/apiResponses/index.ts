// This module contains types for Swagger docs auto-generating.
// There are some restrictions for types here:
// 1) no generics
// 2) no classes
// 3) no array/functional interfaces.

import { IRetrieveProfileInfoResponseDto, ISimpleActionResponse } from './basic';

export interface IBindReviewTargetResponseDto extends ISimpleActionResponse {}

export interface ICheckIsUserConfirmedResponseDto {
  isConfirmed: boolean;
}

export interface ICheckIsUserRegisteredResponseDto {
  isRegistered: boolean;
}

export interface ICheckAuthResponseDto extends ISimpleActionResponse {}

export interface ICompleteRegistration extends ISimpleActionResponse {}

export interface IExchangeLinkedInAuthCodeResponseDto {
  'li_at': string;
}

export interface IFacebookBasicProfileDto {
  id: string;
  name: string;
  picture: { data: { url: string; } };
}

export interface IGetNReviewsOfAmountResponseDto {
  amount: number;
}

export interface IGetNthReviewOfResponseDto {
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

export interface IHealthResponseDTO {
  message: string;
  version: string;
}

export interface ILinkedInBasicProfileDto {
  id: string;
  localizedFirstName: string;
  localizedLastName: string;
}

export interface ILinkedInPhotoDto {
  profilePicture: {
    'displayImage~': {
      elements: { identifiers: { identifier: string; }[] }[]
    }
  }
}

export interface IPrepareReviewResponseDto extends ISimpleActionResponse {}

export interface IPrepareUserResponseDto extends ISimpleActionResponse {}

export interface IRetrieveFacebookProfileInfoResponseDto extends IRetrieveProfileInfoResponseDto {}

export interface IRetrieveLinkedInProfileInfoResponseDto extends IRetrieveProfileInfoResponseDto {}

export interface ISearchUserResponseDto {
  results: {
    name: string,
    photoUrl: string,
    position: string,
    workStartMonth: number,
    workStartYear: number,
    company: {
      id: number;
      name: string;
      site: string;
      logoUrl: string | null;
    }
  }[]
}
