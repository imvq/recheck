import { toast } from 'react-toastify';

import * as apiResponses from 'utils/typing/apiResponses';
import * as generalTypes from 'utils/typing/general';
import { IReviewCardCommonData } from 'utils/typing/general/basic';
import { cookieManager, cookiesList } from 'utils/cookies';

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
 * Validate email address.
 */
export function isValidEmail(email: string): boolean {
  return /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
    .test(email.toLowerCase());
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
    currentEmail: profileDto.email || '',
    currentShareableId: profileDto.shareableId || '',
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
export const respond = (screen: string) => `@media (max-width: ${screen})`;

/**
 * Get media query for min screen size.
 */
export const respondUp = (screen: string) => `@media (min-width: ${screen})`;

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
    [`Оценка: ${from.recommendationMark}`, from.recommendation]
  ];
}

/**
 * Show notification toast.
 */
export function showToast(text: string) {
  return toast.dark(text, {
    position: 'bottom-left',
    style: {
      backgroundColor: '#33c7ba',
      textAlign: 'center',
      fontSize: '1.3rem'
    },
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
  });
}
