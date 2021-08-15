import styled from 'styled-components';

import { ScreenBreakpoint } from 'commons/utils/enums';
import cssVars from 'commons/styles/cssVars';
import { respond } from 'commons/utils/functions';
import Logo from 'components/shared/Logo';
import TelegramIconImage from 'assets/images/shared/Footer/TelegramIcon.png';

export const Wrapper = styled.div`
  grid-area: Footer;
  height: ${cssVars.footerHeight};
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

export const EmptyWrapper = styled.div`
  width: 6rem;

  ${respond(ScreenBreakpoint.XS)} {
    display: none;
  }
`;

export const InnerLogo = styled(Logo)`
  ${respond(ScreenBreakpoint.XS)} {
    display: none;
  }
`;

export const MenuEntryText = styled.span`
  cursor: pointer;
  
  font-size: 1.25rem;
  line-height: 2.4rem;

  &:hover {
    text-decoration: underline;
  }

  ${respond(ScreenBreakpoint.XS)} {
    font-size: 1.5rem;
    font-weight: 800;
  }
`;

export const MenuEntryTextMarked = styled(MenuEntryText)`
  font-weight: 800;

  &:hover {
    text-decoration: none;
    cursor: default;
  }

  ${respond(ScreenBreakpoint.XS)} {
    display: none;
  }
`;

export const MenuEntryTextDisabled = styled(MenuEntryText)`
  &:hover {
    text-decoration: none;
    cursor: default;
  }
`;

export const SocialLink = styled.a`
  width: fit-content;
`;

const TelegramIcon = styled.img`
  width: 2.5em;
`;

export const TelegramIconWrapper = () => (
  <TelegramIcon src={TelegramIconImage} alt='' />
);
