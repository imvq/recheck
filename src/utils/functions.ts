import psl from 'psl';

import * as apiResponses from 'utils/typing/apiResponses';
import * as generalTypes from 'utils/typing/general';
import { IReviewCardCommonData } from 'utils/typing/general/basic';
import { cookieManager, cookiesList } from 'utils/cookies';
import { ScreenBreakpoint } from './enums';

/**
 * Generate list with n values down starting from a certain value.
 */
export function getNValuesDown(from : number, n: number): number[] {
  return Array.from({ length: n }, (_, i) => from - i);
}

/**
 * Partially applied onChange input event.
 */
export function inputHandler(event: generalTypes.InputEvent, setter: (value: string) => void) {
  setter(event.target.value);
}

/**
 * Validate email.
 */
export function isValidEmail(text: string): boolean {
  return /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
    .test(text.toLowerCase());
}

function extractHostname(url: string) {
  let hostname = url.indexOf('//') > -1 ? url.split('/')[2] : url.split('/')[0];
  // find & remove port number
  hostname = hostname.split(':')[0];
  // find & remove "?"
  hostname = hostname.split('?')[0];

  return hostname;
}

export function doesEmailContainUrl(email: string, fullDomain: string): boolean {
  const emailDomain = email.substring(email.lastIndexOf('@') + 1);
  const urlDomain = psl.get(extractHostname(fullDomain));

  return emailDomain === urlDomain;
}

/**
 * Validate URL.
 */
export function isValidUrl(text: string): boolean {
  return new RegExp([
    '^(https?:\\/\\/)?', // Proocol.
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|', // Domain name.
    '((\\d{1,3}\\.){3}\\d{1,3}))', // IPv4 address.
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*', // Port and path.
    '(\\?[;&a-z\\d%_.~+=-]*)?', // Query string.
    '(\\#[-a-z\\d_]*)?$' // Fragment locator.
  ].join('')).test(text.toLowerCase());
}

type ProfileDto = apiResponses.LinkedInProfileDto | apiResponses.FacebookProfileDto;

/**
 * Transform external profile DTO to store profile state object.
 */
export function mapProfileDtoToState(profileDto: ProfileDto): generalTypes.AppProfileInfo {
  return {
    currentId: profileDto.profileId,
    currentName: profileDto.name,
    currentPhotoUrl: profileDto.photoUrl
  };
}

/**
 * Stuff to do when user presses exit button.
 */
export function onExit(lockPageCallback: () => void) {
  lockPageCallback();
  cookieManager.remove(cookiesList.accessTokenLinkedIn);
  cookieManager.remove(cookiesList.accessTokenFacebook);
  window.location.replace(window.location.origin);
}

/**
 * Get media query for max screen size.
 */
export const respond = (screen: ScreenBreakpoint) => `@media (max-width: ${screen})`;

/**
 * Partially applied onChange textarea event.
 */
export function textAreaHandler(
  event: generalTypes.TextAreaEvent,
  setter: (value: string) => void
) {
  setter(event.target.value);
}

/**
 * Get short text with three periods after.
 */
export function trimText(text: string, sliceTo: number) {
  return text.length > sliceTo ? `${text.slice(0, sliceTo)} ...` : text;
}

/**
 * Transform review fields to array.
 */
export function mapReviewToArray(from: IReviewCardCommonData) {
  return [
    ['', from.tasks],
    ['', from.strengths],
    ['', from.improvements],
    ['', from.results],
    [`Оценка: ${from.levelMark}`, from.levelComment],
    [`Оценка: ${from.activityMark}`, from.activityComment],
    [`Оценка: ${from.ownHireOpinionMark}`, from.ownHireOpinionComment],
    [`Оценка: ${from.qualityMark}`, from.qualityComment],
    [`Оценка: ${from.leadershipMark}`, from.leadershipComment]
  ];
}
