import { ProfileDto, ProfileInfo, InputEvent, TextAreaEvent, Setter } from './types.common';
import { ScreenBreakpoint } from './enums';

/**
 * Transform profile DTO to store profile state object.
 */
export const mapProfileDtoToState = (profileDto: ProfileDto): ProfileInfo => ({
  currentId: profileDto.profileId,
  currentName: profileDto.name,
  currentEmail: profileDto.email,
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
