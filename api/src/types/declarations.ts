import { UploadedFile } from 'express-fileupload';
import cors from 'cors';

// ==================== Utility types ====================

export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;

export type Maybe<T> = Nullable<T> | Optional<T>;

export interface Uploads {
  [key: string]: Optional<UploadedFile>;
}

export interface AvatarUploads extends Uploads {
  avatar: Optional<UploadedFile>
}

export type Gender = 'Male' | 'Female';

export type CorsResponse = {
  statusCode?: number | undefined;
  setHeader(key: string, value: string): any;
  end(): any;
};

export type CorsMiddleware = (
  req: cors.CorsRequest,
  res: CorsResponse,
  next: (err?: any) => any) => void;

export type StringIndexable = {
  [key: string]: string;
};

// ==================== Response DTOs ======================

export type ExchangeAuthCodeResponseDto = {
  accessToken: string;
};

export type CheckAuthResponseDto = {
  success: boolean;
};

export type HealthResponseDTO = {
  message: string;
  version: string;
};

export type UserResponseDto = {
  email: string;
  name: string;
  photoUrl: string;
  searches: number;
  availableSearches: number;
};
