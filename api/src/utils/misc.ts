/**
 * This module contains small miscellaneous functions.
 */

/**
 * Dummy function (for testing purpose).
 */
export const getDummy = () => {};

/**
 * Get axios config for authorized requests.
 */
export function createAuthConfig(accessToken: string) {
  const headers = { Authorization: `Bearer ${accessToken}` };

  return { headers };
}

/**
 * Get axios config for URL-encoded requests.
 */
export function createUrlEncodedConfig() {
  return { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };
}
