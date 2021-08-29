/**
 * Small helper functions.
 */

import { toast } from 'react-toastify';

import * as constants from 'commons/utils/constants';

import { ISearchProfileInfo } from 'commons/types/general';
import { IRetrievedProfileDto } from 'commons/types/responses/basic';
import { ScreenBreakpoint, toastVariants } from 'commons/types/unions';
import { cookieManager } from 'commons/utils/services/cookies';

export function onExit(lockPageCallback: () => void) {
  lockPageCallback();
  cookieManager.remove(constants.ACCESS_TOKEN_LINKEDIN);
  window.location.replace(window.location.origin);
}

export const mapProfileDtoToState = (profileDto: IRetrievedProfileDto) => ({
  currentId: profileDto.profileId,
  currentShareableId: profileDto.shareableId || '',
  currentName: profileDto.name,
  currentEmail: profileDto.email || '',
  currentCompany: profileDto.company || '',
  currentPosition: profileDto.position || '',
  currentPhotoUrl: profileDto.photoUrl
});

export const mapProfileInfoToIAppProfileInfoSlice = (info: ISearchProfileInfo) => ({
  currentName: info.name,
  currentPhotoUrl: info.photoUrl,
  currentCompany: info.company.name,
  currentPosition: info.position
});

export const respond = (screen: ScreenBreakpoint) => `@media (max-width: ${screen}px)`;

export const respondUp = (screen: ScreenBreakpoint) => `@media (min-width: ${screen}px)`;

export const showToast = (text: string, variant = toastVariants.Success) => toast.dark(text, {
  style: { backgroundColor: variant, textAlign: 'center', fontSize: '1.3rem' },
  position: 'bottom-left',
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true
});
