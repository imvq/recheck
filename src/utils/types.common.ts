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

export interface ProfileInfo {
  currentId: string;
  currentName: string;
  currentEmail: string;
  currentPhotoUrl: string;
}
