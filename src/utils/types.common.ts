// ==================== Utility types ====================

export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type Maybe<T> = Nullable<T> | Optional<T>;

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

export interface ProfileDto {
  profileId: string;
  name: string;
  email: string;
  photoUrl: string;
}

export interface ProfileInfo {
  currentId: string;
  currentName: string;
  currentEmail: string;
  currentPhotoUrl: string;
}
