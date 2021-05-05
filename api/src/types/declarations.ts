import cors from 'cors';

import Dtos from '@dto';

export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;

export type Maybe<T> = Nullable<T> | Optional<T>;

export interface CorsResponse {
  statusCode?: number | undefined;
  setHeader(key: string, value: string): any;
  end(): any;
}

export interface CorsMiddleware {
  (req: cors.CorsRequest, res: CorsResponse, next: (err?: any) => any): void;
}

export interface CheckIsUserRegisteredResponseDto {
  isRegistered: boolean;
}

export interface ExchangeLinkedInAuthCodeResponseDto {
  'li_at': string;
}

export interface FacebookBasicProfileDto {
  id: string;
  name: string;
  picture: {
    data: {
      url: string;
    }
  };
}

export interface LinkedInBasicProfileDto {
  id: string;
  localizedFirstName: string;
  localizedLastName: string;
}

export interface LinkedInPhotoDto {
  profilePicture: {
    'displayImage~': {
      elements: {
        identifiers: {
          identifier: string;
        }[]
      }[]
    }
  }
}

export interface PrepareUserResponseDto {
  success: boolean;
}

interface RetrieveProfileInfoResponseDto {
  profileId: string;
  name: string;
  photoUrl: string;
}

export interface RetrieveLinkedInProfileInfoResponseDto extends RetrieveProfileInfoResponseDto {}

export interface RetrieveFacebookProfileInfoResponseDto extends RetrieveProfileInfoResponseDto {}

interface SimpleActionResponse {
  success: boolean;
}

export interface BindReviewTargetResponseDto extends SimpleActionResponse {}

export interface CheckAuthResponseDto extends SimpleActionResponse {}

export interface PrepareReviewDto extends SimpleActionResponse {}

export interface HealthResponseDTO {
  message: string;
  version: string;
}

export interface StringIndexable {
  [key: string]: string;
}

export type CompanyData = Dtos.CreateCompanyDto;
export type UserData = Dtos.PrepareUserDto;
