import styled, { css } from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';

import { cssVars, mixins } from 'style.common';
import { respond, ScreenBreakpoint } from 'tools.common';
import Logo from 'components/reusables/Logo';
import TelegramIconImage from 'assets/images/Footer/TelegramIcon.png';

/**
 * Styled component for footer wrapper.
 */
export const Wrapper = styled.div`
  grid-area: Footer;
  height: 17.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e1e6fb;
  border-top: 0.2rem solid #9ea9d1;

  ${respond(ScreenBreakpoint.XS)} {
    height: 20rem;
    flex-direction: column;
  }
`;

/**
 * Styled component for footer section wrapper.
 */
export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 23rem;
  height: 100%;
  padding-left: 1.5rem;
  padding-top: 3.5rem;

  ${respond(ScreenBreakpoint.XS)} {
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
  }

  &:first-child {
    padding: 0;
    justify-content: center;

    ${respond(ScreenBreakpoint.XS)} {
      display: none;
    }
  }

  &:nth-child(2) {
    ${respond(ScreenBreakpoint.XS)} {
      text-decoration: underline;
    }
  }
`;

/**
 * Styled component for empty wrapper.
 */
export const EmptyWrapper = styled.div`
  width: 6rem;

  ${respond(ScreenBreakpoint.XS)} {
    display: none;
  }
`;

/**
 * Styled component for logo within footer.
 */
export const InnerLogo = styled(Logo)`
  ${respond(ScreenBreakpoint.XS)} {
    display: none;
  }
`;

/**
 * Styled component for footer menu entry text.
 */
export const MenuEntryText = styled.span`
  cursor: pointer;
  font-family: Open Sans;
  font-size: 1.25rem;
  line-height: 2.4rem;

  &:hover {
    text-decoration: underline;
  }

  ${respond(ScreenBreakpoint.XS)} {
    font-size: 1.5rem;
    font-family: Open Sans;
    font-weight: 800;
  }
`;

/**
 * Styled component for footer menu entry text.
 */
export const MenuEntryTextMarked = styled(MenuEntryText)`
  font-family: Open Sans;
  font-weight: 800;

  &:hover {
    text-decoration: none;
    cursor: default;
  }

  ${respond(ScreenBreakpoint.XS)} {
    display: none;
  }
`;

/**
 * Styled component for footer menu entry text.
 */
export const MenuEntryTextDisabled = styled(MenuEntryText)`
  &:hover {
    text-decoration: none;
    cursor: default;
  }
`;

/**
 * Styled component for footer scroll link.
 */
export const AdaptingScrollLink = styled(ScrollLink)`
  ${respond(ScreenBreakpoint.XS)} {
    display: none;
  }
`;

/**
 * Styled component for footer social link.
 */
export const SocialLink = styled.a`
  width: fit-content;
`;

/**
 * Styled component for footer telegram icon.
 */
const TelegramIcon = styled.img`
  width: 2.5em;
`;

/**
 * Wrapper for footer telegram icon.
 */
export const TelegramIconWrapper = () => (
  <TelegramIcon src={TelegramIconImage} alt='' />
);
