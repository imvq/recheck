import styled from 'styled-components';

import animations from 'commons/styles/animations';
import cssVars from 'commons/styles/cssVars';

import { toastVariants } from 'commons/types/unions';

export const ConnectionErrorPopupWrapper = styled.div`
  position: fixed;
  z-index: 999;

  top: 10vh;

  width: 100%;

  display: flex;
  justify-content: center;
`;

export const ConnectionErrorPopup = styled.div`
  animation: ${animations.slideIn} .5s;

  user-select: none;

  display: flex;
  justify-content: center;
  align-items: center;

  width: fit-content;
  min-height: 5rem;
  box-sizing: border-box;
  padding: 1rem;

  background-color: ${toastVariants.Alert};
  color: white;

  font-size: 1.6rem;
  font-weight: 600;

  border-radius: 1rem;
  filter: ${cssVars.sectionShadow};

  &>*:not(:last-child) {
    margin-right: .7rem;
  }
`;
