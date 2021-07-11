// This module contains types for Swagger docs auto-generating.
// There are some restrictions for types here:
// 1) no generics
// 2) no classes
// 3) no array/functional interfaces.

import {
  IGetNReviewsAmountResponseDto,
  IGetNthReviewResponseDto,
  IRetrieveProfileInfoResponseDto,
  ISimpleActionResponse
} from './basic';

export interface IBindReviewTargetResponseDto extends ISimpleActionResponse {}

export interface ICheckIsUserConfirmedResponseDto {
  isConfirmed: boolean;
}

export interface ICheckIsUserRegisteredResponseDto {
  isRegistered: boolean;
}

export interface ICheckAccessToReviewsAboutUserDto extends ISimpleActionResponse {}

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

export interface IGetMatchedCompanies {
  results: {
    id: number;
    name: string;
    logoUrl: string | null;
  }[]
}

export interface IGetRecommendations {
  results: {
    id: number;
    name: string;
    logoUrl: string;
    members: {
      name: string;
      photoUrl: string;
      position: string;
    }[];
  }[];
}

export interface IGetNReviewsGotAmountResponseDto extends IGetNReviewsAmountResponseDto {}

export interface IGetNReviewsLeftAmountResponseDto extends IGetNReviewsAmountResponseDto {}

export interface IGetNthReviewGotResponseDto extends IGetNthReviewResponseDto {}

export interface IGetNthReviewLeftResponseDto extends IGetNthReviewResponseDto {}

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

export interface IRetrieveFacebookProfileOnfoReducedResponseDto {
  email?: string;
  shareableId?: string;
}

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
      logoUrl: string | null;
    }
  }[]
}
