import styled from 'styled-components';

import { animations, cssVars } from 'utils/style.common';
import { ReactComponent as CloseCross } from 'assets/images/common/CloseCross.svg';

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
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

  width: 50rem;
  height: 30rem;
  box-sizing: border-box;
  padding: 0 2rem 2rem;
  background-color: #e5e5e5;
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
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const BodyText = styled.span`
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 2rem;
`;

export const AdaptedImage = styled.img`
  width: 9rem;
`;
