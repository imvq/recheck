import CookiePopup from 'components/shared/CookiePopup';
import AuthPopupManager from 'components/shared/AuthPopupManager';
import SearchPopupManager from 'components/shared/SearchPopupManager';
import GreetingsSection from './GreetingsSection';
import HowToWorkSection from './HowToWorkSection';
import InfoblockSection from './InfoblockSection';
import MainSwipeSection from './MainSwipeSection';
import MotivatorSection from './MotivatorSection';
import Footer from './Footer';

import * as styled from './styled';

/**
 * Landing page parts wrapper.
 */
export default () => (
  <styled.Wrapper>
    <GreetingsSection />
    <HowToWorkSection />
    <InfoblockSection />
    <MainSwipeSection />
    <MotivatorSection />
    <Footer />
    <CookiePopup />
    <AuthPopupManager />
    <SearchPopupManager />
  </styled.Wrapper>
);
