import Cookies from 'universal-cookie';

/**
 * Wrapper controling all website client cookies.
 */
export const cookieManager = new Cookies();

/**
 * Module containing names of per-app cookies.
 */

export const cookiesList = {
  accessTokenLinkedIn: 'li_at' as const,
  accessTokenFacebook: 'fa_at' as const
};
