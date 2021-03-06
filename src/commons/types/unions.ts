/**
 * App-wide union types to be used as enumerations.
 */

/**
 * Toolbar manu entries.
 */
export const mainToolbarEntries = {
  AboutMe: 'AboutMe',
  Invite: 'Invite',
  MyReviews: 'MyReviews',
  NoEntry: 'NoEntry',
  ObservedUsers: 'ObservedUsers',
  Welcome: 'Welcome'
} as const;

export type MainToolbarEntry = typeof mainToolbarEntries[keyof typeof mainToolbarEntries];

/**
 * Placeholders for pagination page buttons.
 */
export const paginationDirections = {
  Prev: 'Prev',
  Next: 'Next'
} as const;

export type PaginationDirection = typeof paginationDirections[keyof typeof paginationDirections];

/**
 * User roles.
 */
export const userRoles = {
  Recruiter: 'recruiter',
  Candidate: 'candidate'
} as const;

export type UserRole = typeof userRoles[keyof typeof userRoles];

/**
 * Represents width of the screen.
 * Supposed to be used with CSS media queries.
 */
export const screenBreakpoints = {
  XS: 868,
  SM: 1024,
  MD: 1280,
  LG: 1366,
  XD: 1536,
  XXD: 1600,
  XXXD: 1728,
  XXXXD: 2400
} as const;

export type ScreenBreakpoint = typeof screenBreakpoints[keyof typeof screenBreakpoints];

/**
 * Color variants for toasts.
 */
export const toastVariants = {
  Success: '#33c7ba',
  Alert: '#dc3545'
};

export type ToastVariant = typeof toastVariants[keyof typeof toastVariants];
