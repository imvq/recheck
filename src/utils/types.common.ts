import { ReviewStatus } from './enums';

// ==================== Utility types ====================

export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type Maybe<T> = Nullable<T> | Optional<T>;

export interface OptionType {
  key: any;
  text: string;
}

// ======================= Own props =====================

export interface ReviewCardData {
  name: string;
  photoUrl: string;
  position: string;
  company: string;
  experience: string;
  review: string;
  nReviews: number;
}

export interface ReviewCardDataFull extends ReviewCardData {
  questions: string[];
  status: ReviewStatus;
}

export interface PreviousSearchCardData {
  name: string;
  position: string;
  company: string;
  photoUrl: string;
}

export interface ProfileDto {
  profileId: string;
  name: string;
  email: string;
  photoUrl: string;
  isRegistered: boolean;
}

export interface ProfileInfo {
  currentId: string;
  currentName: string;
  currentEmail: string;
  currentPhotoUrl: string;
}
