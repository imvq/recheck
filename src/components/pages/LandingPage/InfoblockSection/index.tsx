import { memo } from 'react';

import TitleView from './TitleView';
import InfoTimeSave from './InfoTimeSave';
import InfoEasement from './InfoEasement';
import InfoWarranty from './InfoWarranty';

import * as styled from './styled';

/**
 * Additional info section.
 */
export default memo(() => (
  <styled.Wrapper>
    <TitleView />
    <styled.InfoBlockDesktopOnlyWrapper>
      <InfoTimeSave />
    </styled.InfoBlockDesktopOnlyWrapper>

    <styled.InfoBlockDesktopOnlyWrapper>
      <InfoEasement />
    </styled.InfoBlockDesktopOnlyWrapper>

    <styled.InfoBlockDesktopOnlyWrapper>
      <InfoWarranty />
    </styled.InfoBlockDesktopOnlyWrapper>

    <styled.SubsectionsWrapper>
      <InfoTimeSave />
      <InfoEasement />
      <InfoWarranty />
    </styled.SubsectionsWrapper>
  </styled.Wrapper>
));
