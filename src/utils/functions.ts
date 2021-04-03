import { ProfileDto, ProfileInfo } from './types.common';
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
