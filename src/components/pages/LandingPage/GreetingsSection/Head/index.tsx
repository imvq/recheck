import { memo } from 'react';

import LogoWrapper from './LogoSection';
import CabinetWrapper from './CabinetWrapper';
import TabsSection from './TabsSection';

import * as styled from './styled';
/**
 * Head of landing page.
 */
export default memo(() => (
  <styled.Wrapper>
    <LogoWrapper />
    <TabsSection />
    <CabinetWrapper />
  </styled.Wrapper>
));
