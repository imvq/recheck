import { IRetrieveProfileInfoResponseDto, ISimpleActionResponse } from './basic';

export interface IBindReviewTargetResponseDto extends ISimpleActionResponse {}

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

export interface IRetrieveFacebookProfileInfoResponseDto extends IRetrieveProfileInfoResponseDto {}

export interface IRetrieveLinkedInProfileInfoResponseDto extends IRetrieveProfileInfoResponseDto {}

export interface IPrepareReviewResponseDto extends ISimpleActionResponse {}

export interface IPrepareUserResponseDto extends ISimpleActionResponse {}
