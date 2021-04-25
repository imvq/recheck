import styled from 'styled-components';

import BackgroundPath from 'assets/images/shared/AuthPopup/Background.jpg';
import { animations, cssVars } from 'utils/style.common';

const cssVarsLocal = {
  background: '#f0f3ff',
  heightFull: '36.5rem',
  heightPic: '14rem',
  thicknessDefault: '0.078vw'
};

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .8);
  z-index: ${cssVars.zIndexPopupLogin};
`;

export const ClickableBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Frame = styled.div`
  animation: ${animations.fadeDefault} .4ms;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60rem;
  height: 30rem;
  box-sizing: border-box;
  background-image: url(${BackgroundPath});
  background-size: cover;
  background-color: ${cssVarsLocal.background};
  border-radius: .3rem;
  z-index: calc(${cssVars.zIndexPopupLogin} + 1);
`;
