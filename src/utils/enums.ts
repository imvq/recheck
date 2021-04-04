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
 * Represents tabs in profile menu bar.
 */
export enum ProfileMenuEntry {
  MY_REVIEWS,
  HISTORY,
  ABOUT_ME
}

/**
 * Status of the review.
 */
export enum ReviewStatus {
  CONFIRMED,
  REJECTED,
  IDLE
}
