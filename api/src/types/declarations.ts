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

export interface EmailDto {
  elements: {
    ['handle~']: {
      emailAddress: string;
    }
  }[]
}

export interface ExchangeAuthCodeResponseDto {
  'BEARER': string;
}

export interface GetProfileResponseDto {
  id: string;
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

export interface UserResponseDto {
  email: string;
  name: string;
  photoUrl: string;
  searches: number;
  availableSearches: number;
}
