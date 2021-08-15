import styled from 'styled-components';

import cssVars from 'commons/styles/cssVars';
import { ScreenBreakpoint } from 'commons/utils/enums';
import { respond } from 'commons/utils/functions';

const cssVarsLocal = {
  widthOffset: '12rem'
};

export const Wrapper = styled.div`
  grid-area: Head;
  display: grid;
  grid-template:
    'LogoWrapper TabSection TelegramWrapper' 1fr / 1fr 30rem 1fr;
  
  ${respond(ScreenBreakpoint.XS)} {
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

  ${respond(ScreenBreakpoint.XS)} {
    margin: 0;
  }
`;

export const TabsWrapper = styled.div`
  grid-area: TabSection;
  display: flex;
  justify-content: space-between;
  padding-top: .2rem;
  align-items: center;

  ${respond(ScreenBreakpoint.XS)} {
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
    + ${cssVarsLocal.widthOffset}
  );

  ${respond(ScreenBreakpoint.XS)} {
    margin: 0;
  }
`;
