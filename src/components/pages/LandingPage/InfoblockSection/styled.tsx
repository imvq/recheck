import styled from 'styled-components';

import { ScreenBreakpoint } from 'utils/enums';
import { respond } from 'utils/functions';

export const Wrapper = styled.div`
  display: grid;
  grid-template:
    'TitleView TitleView TitleView'          17.904rem
    'InfoTimeSave InfoEasement InfoWarranty' 35.785rem / 1fr 36.295rem 1fr;
  
  ${respond(ScreenBreakpoint.XS)} {
    grid-template:
      'TitleView'  12rem
      'InfoBlocks';
  }
`;

export const SubsectionsWrapper = styled.div`
  display: none;

  ${respond(ScreenBreakpoint.XS)} {
    grid-area: InfoBlocks;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

export const InfoBlockDesktopOnlyWrapper = styled.div`
  ${respond(ScreenBreakpoint.XS)} {
    display: none;
  }
`;
