import Cookies from 'universal-cookie';

import { ScreenBreakpoint } from 'utils/enums';

/**
 * Wrapper controling all website client cookies.
 */
export const cookieManager = new Cookies();

/**
 * Get media query for max screen size.
 */
export function respond(screen: ScreenBreakpoint) {
  return `@media (max-width: ${screen})`;
}
