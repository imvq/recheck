import { toast } from 'react-toastify';

import * as apiResponses from 'commons/types/responses';
import * as generalTypes from 'commons/types/general';
import { ScreenBreakpoint, toastVariants } from 'commons/types/unions';
import { IReviewCardCommonData } from 'commons/types/general/basic';
import { cookieManager, cookiesList } from 'commons/utils/cookies';

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

type ProfileDto = apiResponses.ILinkedInProfileDto | apiResponses.IFacebookProfileDto;

/**
 * Transform external profile DTO to store profile state object.
 */
export function mapProfileDtoToState(profileDto: ProfileDto): generalTypes.IAppProfileInfo {
  return {
    currentId: profileDto.profileId,
    currentShareableId: profileDto.shareableId || '',
    currentName: profileDto.name,
    currentEmail: profileDto.email || '',
    currentCompany: profileDto.company || '',
    currentPosition: profileDto.position || '',
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
export const respond = (screen: ScreenBreakpoint) => `@media (max-width: ${screen}px)`;

/**
 * Get media query for min screen size.
 */
export const respondUp = (screen: ScreenBreakpoint) => `@media (min-width: ${screen}px)`;

/**
 * Partially applied onChange textarea event.
 */
export function textAreaHandler(
  event: generalTypes.ITextAreaEvent,
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
export function showToast(text: string, variant = toastVariants.Success) {
  return toast.dark(text, {
    position: 'bottom-left',
    style: {
      backgroundColor: variant,
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

export function mapProfileInfoToIAppProfileInfoSlice(info: generalTypes.ISearchProfileInfo) {
  return {
    currentName: info.name,
    currentPhotoUrl: info.photoUrl,
    currentCompany: info.company.name,
    currentPosition: info.position
  };
}