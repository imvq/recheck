import Footer from 'components/reusables/Footer';
import { Wrapper } from './styled';
import PopupSection from './PopupSection';
import GreetingsSection from './GreetingsSection';
import HowToWorkSection from './HowToWorkSection';
import InfoblockSection from './InfoblockSection';
import MainSwipeSection from './MainSwipeSection';
import MotivatorSection from './MotivatorSection';

/**
 * Landing page parts wrapper.
 */
export default () => (
  <Wrapper>
    <PopupSection />
    <GreetingsSection />
    <HowToWorkSection />
    <InfoblockSection />
    <MainSwipeSection />
    <MotivatorSection />
    <Footer />
  </Wrapper>
);
