/**
 * This module contains parse validators for strings.
 */

/**
 * Check if provided value is a valid number;
 */
export const isValidNumber = (value: string) => !Number.isNaN(parseInt(value));
