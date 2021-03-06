import styled from 'styled-components';

import cssVars from 'commons/styles/cssVars';

import { screenBreakpoints } from 'commons/types/unions';
import { respond } from 'commons/utils/misc';

export const Wrapper = styled.div`
  grid-area: Head;
  display: grid;
  grid-template:
    'LogoWrapper TabSection TelegramWrapper' 1fr / 1fr 30rem 1fr;
  
  ${respond(screenBreakpoints.XS)} {
    display: flex;
    justify-content: space-evenly;
    background-color: $color-background-default;
  }
`;

export const LogoWrapper = styled.div`
  grid-area: LogoWrapper;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: ${cssVars.greetingsViewHeadPaddingHorizontal};

  ${respond(screenBreakpoints.XS)} {
    margin: 0;
  }
`;

export const TabsWrapper = styled.div`
  grid-area: TabSection;
  display: flex;
  justify-content: space-between;
  padding-top: .2rem;
  align-items: center;

  ${respond(screenBreakpoints.XS)} {
    display: none;
  }
`;

export const TabButton = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  user-select: none;
  font-size: 1.3rem;
`;

export const CabinetWrapper = styled.div`
  grid-area: TelegramWrapper;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: calc(
      ${cssVars.greetingsViewHeadPaddingHorizontal}
    + ${cssVars.widthOffsetProfileBadge}
  );

  ${respond(screenBreakpoints.XS)} {
    margin: 0;
  }
`;
