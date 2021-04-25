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

export interface CheckIsRegisteredDto {
  profileId: string;
}

export interface EmailDto {
  elements: {
    ['handle~']: {
      emailAddress: string;
    }
  }[]
}

export interface ExchangeLinkedInAuthCodeResponseDto {
  'li_at': string;
}

export interface RetrieveLinkedInProfileInfoResponseDto {
  profileId: string;
  name: string;
  email: string;
  photoUrl: string;
}

export interface HealthResponseDTO {
  message: string;
  version: string;
}

export interface PhotoDto {
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

export interface ProfileDto {
  id: string;
  localizedFirstName: string;
  localizedLastName: string;
}

export interface StringIndexable {
  [key: string]: string;
}
