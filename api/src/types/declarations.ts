import cors from 'cors';

export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;

export type Maybe<T> = Nullable<T> | Optional<T>;

export type CheckAuthResponseDto = {
  success: boolean;
};

export type CorsResponse = {
  statusCode?: number | undefined;
  setHeader(key: string, value: string): any;
  end(): any;
};

export type CorsMiddleware = (
  req: cors.CorsRequest,
  res: CorsResponse,
  next: (err?: any) => any
) => void;

export type EmailDto = {
  elements: {
    handle: {
      emailAddress: string;
    }
  }[]
};

export type ExchangeAuthCodeResponseDto = {
  accessToken: string;
};

export type GetProfileResponseDto = {
  name: string;
  email: string;
  photoUrl: string;
};

export type HealthResponseDTO = {
  message: string;
  version: string;
};

export type PhotoDto = {
  profilePicture: {
    'displayImage~': {
      elements: {
        identifiers: {
          identifier: string;
        }
      }
    }
  }
};

export type ProfileDto = {
  localizedFirstName: string;
  localizedLastName: string;
};

export type StringIndexable = {
  [key: string]: string;
};

export type UserResponseDto = {
  email: string;
  name: string;
  photoUrl: string;
  searches: number;
  availableSearches: number;
};
