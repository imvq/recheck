import styled from 'styled-components';

import { animations, cssVars } from 'utils/style.common';
import { ReactComponent as CloseCross } from 'assets/images/common/CloseCross.svg';
import BackgroundPath from 'assets/images/pages/SearchPage/ExpandView/Background.svg';

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: ${cssVars.zIndexPopupExpandView};
`;

export const ClickableBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .8);
`;

export const FrameWrapper = styled.div`
  position: absolute;
  padding-top: 5rem;
  width: fit-content;
  height: fit-content;
  z-index: calc(${cssVars.zIndexPopupLogin} + 1);
`;

export const Frame = styled.div`
  animation: ${animations.fadeDefault} .4s;

  width: 90rem;
  max-width: 90vw;
  height: fit-content;
  box-sizing: border-box;
  padding: 0 2rem 2rem;
  background-color: white;
  background-image: url(${BackgroundPath});
  background-size: cover;
  border-radius: .3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
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

export const CardsWrapper = styled.div``;

export const CardWrapper = styled.div`
  float: left;
  box-sizing: border-box;
  padding: 1rem;

  &:nth-child(4n + 1) {
    clear: left;
  }
`;
