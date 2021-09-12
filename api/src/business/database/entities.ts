export interface NameToken {
  id?: string;
  value?: string;

  // Joins.
  bounds?: User[];
}

export interface User {
  id?: string;
  privateToken?: string;
  shareableId?: string;
  name?: string;
  email?: string;
  photoUrl?: string;
  position?: string;
  currentWorkStartingYear?: number;
  currentWorkStartingMonth?: number;
  reviewsAvailable?: number;

  // Joins.
  company?: Company;
  referral?: User;
  availableUsers?: User[];
  reviewsGot?: Review[];
  reviewsLeft?: Review[];
}

export interface Company {
  id?: string;
  name?: string;
  logoUrl?: string | null;

  // Joins.
  members?: User[];
}

export interface Review {
  id?: string;
  content?: string;
  creationDate?: number;

  // Joins.
  author?: User;
  target?: User;
}
