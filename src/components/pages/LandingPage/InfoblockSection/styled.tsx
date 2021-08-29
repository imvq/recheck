import styled from 'styled-components';

import { screenBreakpoints } from 'commons/types/unions';
import { respond } from 'commons/utils/misc';

export const Wrapper = styled.div`
  display: grid;
  grid-template:
    'TitleView TitleView TitleView'          17.904rem
    'InfoTimeSave InfoEasement InfoWarranty' 35.785rem / 1fr 36.295rem 1fr;
  
  ${respond(screenBreakpoints.XS)} {
    grid-template:
      'TitleView'  12rem
      'InfoBlocks';
  }
`;

export const SubsectionsWrapper = styled.div`
  display: none;

  ${respond(screenBreakpoints.XS)} {
    grid-area: InfoBlocks;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

export const InfoBlockDesktopOnlyWrapper = styled.div`
  ${respond(screenBreakpoints.XS)} {
    display: none;
  }
`;
