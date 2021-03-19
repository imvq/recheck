/**
 * This module contains small miscellaneous functions.
 */

import jwt from 'jsonwebtoken';
import randtoken from 'rand-token';
import { Response } from 'express';

import Constants from '@common/Constants';
import Types from '@types';

/**
 * Dummy function (for testing purpose).
 */
export const getDummy = () => {};

/**
 * Check if all the arguments specified are defined.
 *
 * @param {any[]} args Arguments provided
 * @returns {boolean} Ok or not
 */
export const areDefined = (...args: any[]) => (
  args.every((arg) => typeof arg !== 'undefined')
);

/**
 * Check if the argument specified is defined.
 *
 * @param {any} arg Argument provided
 * @returns {boolean} Ok or not
 */
export const isDefined = (arg: any) => typeof arg !== 'undefined';

/**
 * Check if the argument specified is string.
 *
 * @param {any} arg Argument provided
 * @returns {boolean} Ok or not
 */
export const isString = (arg: any) => typeof arg === 'string';

/**
 * Get stringified boolean value if possible.
 *
 * @param {string} arg Argument provided.
 * @returns {boolean} Parsed value
 */
export const parseBoolean = (arg: string) => arg === 'true';

/**
 * Get generated access token.
 *
 * @param {string} email User's email
 * @returns {string} Generated token
 */
export const getAccessToken = (email: string) => jwt.sign(
  { email },
  process.env.JWT_SECRET as string,
  { expiresIn: Constants.DEFAULT_ACCESS_TOKEN_MAX_AGE / 1000 }
);

/**
 * Get generated refresh token.
 *
 * @returns {string} Generated token
 */
export const getRefreshToken = () => randtoken.generate(
  Constants.DEFAULT_REFRESH_TOKEN_LENGTH
);

/**
 * Insert refresh token to response object.
 *
 * @param {Response} response Response object to insert access token to
 * @param {string} cookieName Cookie name
 * @param {string} token Token to paste
 * @param {number} maxAge Cookie max age
 */
export function insertTokenToCookies(
  response: Response, token: string, cookieName: string, maxAge: number
): void {
  response.cookie(cookieName, token, { httpOnly: true, maxAge });
}

/**
 * Resolve uploaded data type.
 * Express.Multer.File type overlaps with fileUpload.FileArray.
 * The function provides a workaround to resolve the type manually.
 *
 * @param {unknown} data Uploded data
 * @returns {Types.Uploads} Uploaded data with resolved type
 */
export function resolveExpressUploadsToSingle(data: unknown): Types.Uploads {
  return data as Types.Uploads;
}

/**
 * Get customly hashed email.
 *
 * @param {string} email User's email
 * @returns {string} Hashed email
 */
export function hashEmail(email: string): string {
  return email.split('')
    .map((_, i) => email.charCodeAt(i).toString(16)).join('');
}
