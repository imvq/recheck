import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';

import Api from 'utils/api';
import { AppActionType, setIsAuthorized, setCurrentProfileInfo } from 'store';
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

/**
 * Do stuff on LinkedIn or Facebook profile info got through the API.
 */
export function onProfileDataRetrieved(
  dispatch: Dispatch<AppActionType>,
  profileResponse: AxiosResponse<LinkedInProfileDto | FacebookProfileDto>
) {
  const normalizedProfileInfo = mapProfileDtoToState(profileResponse.data);

  Api.checkIsRegistered(normalizedProfileInfo.currentId)
    .then((checkResponse) => {
      if (checkResponse.data.flag) {
        dispatch(setCurrentProfileInfo(normalizedProfileInfo));
        dispatch(setIsAuthorized(true));
      } else {
        // Register the user if it is not registered in our app yet.
      }
    });
}
