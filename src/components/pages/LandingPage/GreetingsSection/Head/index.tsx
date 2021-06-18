import LogoWrapper from './LogoSection';
import CabinetWrapper from './CabinetWrapper';
import TabsSection from './TabsSection';

import * as styled from './styled';
/**
 * Head of landing page.
 */
export default () => (
  <styled.Wrapper>
    <LogoWrapper />
    <TabsSection />
    <CabinetWrapper />
  </styled.Wrapper>
);
