import {
  LinkedInProfileDto, FacebookProfileDto, AppProfileInfo, InputEvent,
  TextAreaEvent, Setter
} from './types.common';
import { ScreenBreakpoint } from './enums';

/**
 * Generate list with n values down starting from a certain value.
 */
export const getNValuesDown = (from : number, n: number) => (
  Array.from({ length: n }, (_, i) => from - i)
);

/**
 * Partially applied onChange input event.
 */
export const inputHandler = (event: InputEvent, setter: Setter<string>) => {
  setter(event.target.value);
};

/**
 * Validate email.
 */
export const isValidEmail = (text: string) => (
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
    .test(text.toLowerCase())
);

/**
 * Validate URL.
 */
export const isValidUrl = (text: string) => (
  new RegExp([
    '^(https?:\\/\\/)?', // Proocol.
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|', // Domain name.
    '((\\d{1,3}\\.){3}\\d{1,3}))', // IPv4 address.
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*', // Port and path.
    '(\\?[;&a-z\\d%_.~+=-]*)?', // Query string.
    '(\\#[-a-z\\d_]*)?$' // Fragment locator.
  ].join('')).test(text.toLowerCase())
);

/**
 * Transform external profile DTO to store profile state object.
 */
export const mapProfileDtoToState = (profileDto: LinkedInProfileDto | FacebookProfileDto)
  : AppProfileInfo => ({
  currentId: profileDto.profileId,
  currentName: profileDto.name,
  currentPhotoUrl: profileDto.photoUrl
});

/**
 * Get media query for max screen size.
 */
export const respond = (screen: ScreenBreakpoint) => `@media (max-width: ${screen})`;

/**
 * Partially applied onChange textarea event.
 */
export const textAreaHandler = (event: TextAreaEvent, setter: Setter<string>) => {
  setter(event.target.value);
};

/**
 * Get short text with three periods after.
 */
export const trimText = (text: string, sliceTo: number) => (
  text.length > sliceTo ? `${text.slice(0, sliceTo)} ...` : text
);
