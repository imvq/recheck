// ==================== Utility types ====================

export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type Maybe<T> = Nullable<T> | Optional<T>;

// ======================= Own props =====================

export type ReviewCardData = {
  name: string;
  photoUrl: string;
  position: string;
  company: string;
  experience: string;
  review: string;
  nReviews: number;
};
