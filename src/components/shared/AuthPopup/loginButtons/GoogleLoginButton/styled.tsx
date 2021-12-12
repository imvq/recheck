import styled from 'styled-components';

import cssVars from 'commons/styles/cssVars';

import { ReactComponent as ButtonSvg } from './GoogleLoginButton.svg';

export const GoogleLoginButton = styled.div`
  width: ${cssVars.widthLoginButton};
  max-width: 100%;
  height: 4rem;

  font-size: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
  box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, .6);
  border-radius: 1rem;

  user-select: none;

  &:hover {
    cursor: pointer;
    filter: drop-shadow(0 0 .2rem rgba(0, 0, 0, .5));
  }

  &:active {
    cursor: pointer;
    opacity: .8;
    filter: alpha(opacity=80);
  }
`;

export const AdaptedGoogleIcon = styled(ButtonSvg)`
  width: 2rem;
  height: 2rem;
`;
