// This module contains types for Swagger docs auto-generating.
// There are some restrictions for types here:
// 1) no generics;
// 2) no classes;
// 3) no array/functional interfaces.

import {
  IGetNReviewsAmountResponseDto,
  IGetNthReviewResponseDto,
  IReducedMember,
  IRetrieveProfileInfoResponseDto,
  ISimpleActionResponseDto
} from './basic';

export interface IBindReviewTargetResponseDto extends ISimpleActionResponseDto {}

export interface ICheckIsEmailAvailableResponseDto extends ISimpleActionResponseDto {}

export interface ICheckIsUserAvailableForReviewResponseDto extends ISimpleActionResponseDto {}

export interface ICheckIsUserConfirmedResponseDto {
  isConfirmed: boolean;
}

export interface ICheckIsUserRegisteredResponseDto {
  isRegistered: boolean;
}

export interface ICheckAuthResponseDto extends ISimpleActionResponseDto {}

export interface ICompleteRegistration extends ISimpleActionResponseDto {}

export interface IDoesUserHasAvailableProfilesResponseDto extends ISimpleActionResponseDto {}

export interface IExchangeLinkedInAuthCodeResponseDto {
  'li_at': string;
}

export interface IFacebookBasicProfileDto {
  id: string;
  name: string;
  picture: { data: { url: string; } };
}

export interface IGetColleaguesResponseDto {
  results: IReducedMember[];
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
    members: IReducedMember[];
  }[];
}

export interface IGetNReviewsGotAmountResponseDto extends IGetNReviewsAmountResponseDto {}

export interface IGetNReviewsLeftAmountResponseDto extends IGetNReviewsAmountResponseDto {}

export interface IGetNthReviewGotResponseDto extends IGetNthReviewResponseDto {}

export interface IGetNthReviewLeftResponseDto extends IGetNthReviewResponseDto {}

export interface IGetTargetNReviewsGotResponseDto extends IGetNReviewsAmountResponseDto {}

export interface IHealthResponseDTO {
  message: string;
  version: string;
}

export interface IIsTargetConnectedResponsDto extends ISimpleActionResponseDto {}

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

export interface IMakeUserAvailableResponseDto extends ISimpleActionResponseDto {}

export interface IPrepareReviewResponseDto extends ISimpleActionResponseDto {}

export interface IPrepareUserResponseDto extends ISimpleActionResponseDto {}

export interface IReassignConfirmationEmailResponseDto extends ISimpleActionResponseDto {}

export interface IRetrieveFacebookProfileInfoResponseDto extends IRetrieveProfileInfoResponseDto {}

export interface IResendConfirmationResponseDto extends ISimpleActionResponseDto {}

export interface IRetrieveFacebookProfileOnfoReducedResponseDto {
  email?: string;
  shareableId?: string;
}

export interface IRetrieveLinkedInProfileInfoResponseDto extends IRetrieveProfileInfoResponseDto {}

export interface ISearchedUserDto {
  name: string,
  shareableId: string,
  photoUrl: string,
  position: string,
  workStartMonth: number,
  workStartYear: number,
  company: {
    id: number;
    name: string;
    logoUrl: string | null;
  }
}

export interface ISearchUserResponseDto {
  results: ISearchedUserDto[];
}

export interface ISearchUserByShareableIdResponseDto {
  result: ISearchedUserDto;
}
