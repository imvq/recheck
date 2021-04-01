/**
 * This module contains small miscellaneous functions.
 */

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
