import styled from 'styled-components';

import { cssVars } from 'utils/style.common';
import { ScreenBreakpoint } from 'utils/enums';
import { respond } from 'utils/functions';

/**
 * Styled component for main content wrapper.
 */
export const Wrapper = styled.div`
  grid-area: Content;
  display: flex;
  justify-content: center;

  ${respond(ScreenBreakpoint.XS)} {
    background-color: ${cssVars.colorBackgroundRect};
  }
`;

/**
 * Styled component for content action group.
 */
export const ActionGroup = styled.div`
  width: ${cssVars.greetingsViewContentActionGroupWidth};
  font-weight: 600;
  font-size: 2.7rem;
  line-height: 3.5rem;
  text-align: center;
  user-select: none;
`;

/**
 * Styled component for content picture wrapper.
 */
export const PictureWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: -3rem;
  margin-right: -12rem;

  ${respond(ScreenBreakpoint.XS)} {
    display: none;
  }
`;

/**
 * Styled component for content picture.
 */
export const Picture = styled.img`
  width: 60rem;
  height: 40rem;
  user-select: none;
`;

/**
 * Styled component for content text wrapper.
 */
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 16.5rem;
`;
