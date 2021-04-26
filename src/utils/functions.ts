import {
  LinkedInProfileDto, FacebookProfileDto, AppProfileInfo, InputEvent,
  TextAreaEvent, Setter
} from './types.common';
import { ScreenBreakpoint } from './enums';

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
 * Get short text with three periods after.
 */
export const trimText = (text: string, sliceTo: number) => (
  text.length > sliceTo ? `${text.slice(0, sliceTo)} ...` : text
);

/**
 * Partially applied onChange input event.
 */
export const inputHandler = (event: InputEvent, setter: Setter<string>) => {
  setter(event.target.value);
};

/**
 * Partially applied onChange textarea event.
 */
export const textAreaHandler = (event: TextAreaEvent, setter: Setter<string>) => {
  setter(event.target.value);
};

/**
 * Generate list with n values down starting from a certain value.
 */
export const getNValuesDown = (from : number, n: number) => (
  Array.from({ length: n }, (_, i) => from - i)
);
