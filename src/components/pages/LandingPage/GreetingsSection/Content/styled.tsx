import styled from 'styled-components';

import cssVars from 'commons/styles/cssVars';
import mixins from 'commons/styles/mixins';

import { screenBreakpoints } from 'commons/types/unions';
import { respond } from 'commons/utils/misc';

export const Wrapper = styled.div`
  grid-area: Content;
  display: flex;
  justify-content: center;

  ${respond(screenBreakpoints.XS)} {
    background-color: ${cssVars.colorBackgroundRect};
  }
`;

export const ActionGroup = styled.div`
  width: ${cssVars.greetingsViewContentActionGroupWidth};
  font-weight: 600;
  font-size: 2.7rem;
  line-height: 3.5rem;
  text-align: center;
  user-select: none;
`;

export const ActionGroupText = mixins.prepared.DefaultSpan;

export const PictureWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: -3rem;
  margin-right: -12rem;

  ${respond(screenBreakpoints.XS)} {
    display: none;
  }
`;

export const Picture = styled.img`
  width: 60rem;
  height: 40rem;
  user-select: none;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 16.5rem;
`;
