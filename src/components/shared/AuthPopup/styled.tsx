import styled from 'styled-components';

import BackgroundPath from 'assets/images/shared/AuthPopup/Background.jpg';
import { ReactComponent as CloseCross } from 'assets/images/common/CloseCross.svg';
import animations from 'commons/styles/animations';
import cssVars from 'commons/styles/cssVars';

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
  animation: ${animations.fadeDefault} .4s;

  min-width: 55rem;
  height: 24rem;
  box-sizing: border-box;
  padding: 0 2rem 0;
  background-image: url(${BackgroundPath});
  background-size: cover;
  background-color: ${cssVarsLocal.background};
  border-radius: .3rem;
  z-index: calc(${cssVars.zIndexPopupLogin} + 1);

  display: flex;
  flex-direction: column;
`;

export const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const AdaptedCloseCross = styled(CloseCross)`
  width: 1.875rem;
  cursor: pointer;
  padding: 1rem;
  margin-right: -2rem;

  &:hover {
    background-color: rgba(0,0,0,.07);
  }

  &:active {
    background-color: rgba(0,0,0,.1);
  }
`;

export const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  width: 100%;
  padding: 1rem 3rem 4rem;
  font-size: 1.7rem;
  font-weight: 700;
  
  display: flex;
  justify-content: center;
`;

export const ButtonsGroupWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const ButtonsGroupSpan = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  padding: 0 2rem 0;
  display: flex;
  align-items: center;
`;
