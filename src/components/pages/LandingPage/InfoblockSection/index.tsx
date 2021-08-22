import { memo } from 'react';

import InfoEasement from './InfoEasement';
import InfoTimeSave from './InfoTimeSave';
import InfoWarranty from './InfoWarranty';
import TitleView from './TitleView';

import * as styled from './styled';

/**
 * Additional info section.
 */
function InfoblockSection() {
  return (
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
  );
}

export default memo(InfoblockSection);
