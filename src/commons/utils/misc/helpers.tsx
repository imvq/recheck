/**
 * Small helper functions.
 */

import { toast, ToastTransition } from 'react-toastify';

import { ScreenBreakpoint, toastVariants } from 'commons/types/unions';

export function onExit(lockPageCallback: () => void) {
  lockPageCallback();
  localStorage.removeItem('accessToken');
  window.location.replace(window.location.origin);
}

export const respond = (screen: ScreenBreakpoint) => `@media (max-width: ${screen}px)`;

export const respondUp = (screen: ScreenBreakpoint) => `@media (min-width: ${screen}px)`;

export const showToast = (text: string, variant = toastVariants.Success) => toast.dark(text, {
  style: { width: '100%', backgroundColor: variant, textAlign: 'center', fontSize: '1.3rem' },
  position: 'bottom-left',
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: false,
  pauseOnHover: false,
  draggable: false,
  closeButton: false
});

export const showInsignificantToast = (text: string) => toast.dark(text, {
  style: { width: '100%', backgroundColor: '#3a3a3ac1', textAlign: 'center', fontSize: '1.3rem' },
  position: 'bottom-left',
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: false,
  pauseOnHover: false,
  draggable: false,
  closeButton: false
});
