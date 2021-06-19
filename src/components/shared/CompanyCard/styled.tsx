import styled from 'styled-components';

import { cssVars } from 'utils/style.common';

export const Wrapper = styled.div`
  width: 16rem;
  height: fit-content;
  min-height: 20rem;
  box-sizing: border-box;
  border-radius: 1.2rem;
  background-color: white;
  box-shadow:
    ${cssVars.thiknessDefault}
    calc(${cssVars.thiknessDefault} * 3)
    calc(${cssVars.thiknessDefault} * 10)
    0px rgba(143, 143, 143, .40)
  ;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const TopBar = styled.div`
  width: 100%;
  height: 4rem;
  background-color: #f0f3ff;
  border-bottom: ${cssVars.thiknessDefault} solid #c4c4c4;
`;

export const BodyWrapper = styled.div`
  box-sizing: border-box;
  padding: 0 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Span = styled.div<{ isEnlarged?: boolean; isDimmed?: boolean; }>`
  font-size: ${props => (props.isEnlarged ? '1.4rem' : '1.2rem')};
  font-weight: ${props => (props.isEnlarged ? '600' : '400')};
  line-height: ${props => (props.isEnlarged ? '3rem' : '1.5rem')};
  color: ${props => (props.isDimmed ? '#979797' : '#555555')};
  text-decoration: underline;
`;

export const LogoWrapper = styled.img`
  object-fit: contain;
  width: 90%;
  height: 7.5rem;
  border-radius: 2rem;
  margin-top: -2.5rem;
  filter: drop-shadow(.5rem .5rem .6rem rgba(0, 0, 0, .2));
`;

export const ButtonWrapper = styled.div`
  padding: 1rem 0 1rem;
`;
