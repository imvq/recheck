import styled from 'styled-components';

import { ReactComponent as CloseCross } from 'assets/images/common/CloseCross.svg';
import { animations, cssVars } from 'utils/style.common';

const cssVarsLocal = {
  background: '#f0f3ff'
};

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .8);
  z-index: ${cssVars.zIndexPopupSearch};
`;

export const ClickableBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Frame = styled.div`
  animation: ${animations.fadeDefault} 700ms;

  min-width: 55rem;
  height: fit-content;
  box-sizing: border-box;
  padding: 0 2rem 5rem;
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
  color: #47484d;
  
  display: flex;
  justify-content: center;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
`;

export const OptionGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BuyHiddenBadgeWrapper = styled.div`
  width: 20rem;
  height: fit-content;
  box-sizing: border-box;
  padding: 1rem;
  border-radius: 3rem;
  border: none;
  background-color: white;
  text-align: center;
`;

export const BadgeTitleWrapper = styled.div`
  box-sizing: border-box;
  padding: 1rem 0;
`;

export const BadgeTitle = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.6rem;
`;

export const BadgeText = styled.p<{ isEnlarged?: boolean }>`
  font-size: ${props => (props.isEnlarged ? '1.3rem' : '1.2rem')};
  font-weight: ${props => (props.isEnlarged ? '600' : '400')};
  line-height: 1.6rem;
`;

export const ButtonWrapper = styled.div`
  box-sizing: border-box;
  padding: 2rem 0 0;
`;
