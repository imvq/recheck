import Cookies from 'universal-cookie';

/**
 * Wrapper controling all website client cookies.
 */
export const cookieManager = new Cookies();

/**
 * Module containing names of per-app cookies.
 */

export const cookiesList = {
  bearer: 'BEARER' as const
};
