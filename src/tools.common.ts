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
 * Get media query for screen size.
 *
 * @param {string} screen Screen size
 * @returns {string} Media query to apply
 */
export function respond(screen: ScreenBreakpoint) {
  return `@media (max-width: ${screen})`;
}
