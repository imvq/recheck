import { useLocation } from 'react-router-dom';

import CookiePopup from 'components/shared/CookiePopup';
import AuthPopupManager from 'components/shared/AuthPopupManager';
import { Wrapper } from './styled';
import PopupSection from './PopupSection';
import GreetingsSection from './GreetingsSection';
import HowToWorkSection from './HowToWorkSection';
import InfoblockSection from './InfoblockSection';
import MainSwipeSection from './MainSwipeSection';
import MotivatorSection from './MotivatorSection';
import Footer from './Footer';

/**
 * Landing page parts wrapper.
 */
export default () => {
  const location = useLocation<{ rollbackTo?: string; }>();
  const rollbackTo = location.state?.rollbackTo;

  return (
    <Wrapper>
      <PopupSection />
      <GreetingsSection />
      <HowToWorkSection />
      <InfoblockSection />
      <MainSwipeSection />
      <MotivatorSection />
      <Footer />
      <CookiePopup />
      <AuthPopupManager />
    </Wrapper>
  );
};
