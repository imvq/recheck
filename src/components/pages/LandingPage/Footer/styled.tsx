import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';

import { screenBreakpoints } from 'commons/types/unions';
import { respond } from 'commons/utils/misc';

import Logo from 'components/shared/Logo';

export const Wrapper = styled.div`
  grid-area: Footer;
  height: 17.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e1e6fb;
  border-top: 0.2rem solid #9ea9d1;

  ${respond(screenBreakpoints.XS)} {
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

  ${respond(screenBreakpoints.XS)} {
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
  }

  &:first-child {
    padding: 0;
    justify-content: center;

    ${respond(screenBreakpoints.XS)} {
      display: none;
    }
  }

  &:nth-child(2) {
    ${respond(screenBreakpoints.XS)} {
      text-decoration: underline;
    }
  }
`;

export const EmptyWrapper = styled.div`
  width: 6rem;

  ${respond(screenBreakpoints.XS)} {
    display: none;
  }
`;

export const InnerLogo = styled(Logo)`
  ${respond(screenBreakpoints.XS)} {
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

  ${respond(screenBreakpoints.XS)} {
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

  ${respond(screenBreakpoints.XS)} {
    display: none;
  }
`;

export const MenuEntryTextDisabled = styled(MenuEntryText)`
  &:hover {
    text-decoration: none;
    cursor: default;
  }
`;

export const AdaptingScrollLink = styled(ScrollLink)`
  ${respond(screenBreakpoints.XS)} {
    display: none;
  }
`;

export const SocialLink = styled.a`
  width: fit-content;
`;

const TelegramIcon = styled.img`
  width: 2.5em;
`;
