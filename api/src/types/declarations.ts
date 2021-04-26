import cors from 'cors';

export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;

export type Maybe<T> = Nullable<T> | Optional<T>;

export interface CheckAuthResponseDto {
  success: boolean;
}

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

export interface RetrieveProfileInfoResponseDto {
  profileId: string;
  name: string;
  photoUrl: string;
}

export interface RetrieveLinkedInProfileInfoResponseDto extends RetrieveProfileInfoResponseDto {}

export interface RetrieveFacebookProfileInfoResponseDto extends RetrieveProfileInfoResponseDto {}

export interface HealthResponseDTO {
  message: string;
  version: string;
}

export interface StringIndexable {
  [key: string]: string;
}
