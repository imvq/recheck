import Wrapper from './styled';
import LogoWrapper from './LogoSection';
import CabinetWrapper from './CabinetWrapper';
import TabsSection from './TabsSection';

/**
 * Head of landing page.
 */
export default () => (
  <Wrapper>
    <LogoWrapper />
    <TabsSection />
    <CabinetWrapper />
  </Wrapper>
);
