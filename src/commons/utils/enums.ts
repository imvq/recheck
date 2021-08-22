/**
 * Represents sidebar entries.
 */
export enum MainToolbarEntry {
  NoEntry,
  ProfilePageMyReviews,
  ProfilePageHistory,
  ProfilePageAboutMe,
  TopUpAnAccount,
  AddWorkplace,
  NewSearch,
  NewReview
}

/**
 * Represents width of the screen.
 * Is to be used in style mixins.
 * Values are essential.
 */
export enum ScreenBreakpoint {
  XS = '868px',
  SM = '1024px',
  MD = '1280px',
  LG = '1366px',
  XD = '1536px',
  XXD = '1600px',
  XXXD = '1728px'
}

/**
 * Color variants for toasts.
 * Values are essential.
 */
export enum ToastVariants {
  Success = '#33c7ba',
  Alert = '#dc3545'
}
