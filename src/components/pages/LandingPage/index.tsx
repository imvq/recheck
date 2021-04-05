import { FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import { AppState, setIsRegistered } from 'store';
import CookiePopup from 'components/shared/CookiePopup';
import { IProps, IStateProps, IDispatchProps } from './types';
import { Wrapper } from './styled';
import PopupSection from './PopupSection';
import GreetingsSection from './GreetingsSection';
import HowToWorkSection from './HowToWorkSection';
import InfoblockSection from './InfoblockSection';
import MainSwipeSection from './MainSwipeSection';
import MotivatorSection from './MotivatorSection';
import Footer from './Footer';

const mapStateToProps = (store: AppState): IStateProps => ({
  isAuthorized: store.auth.isAuthorized,
  isRegistered: store.auth.isRegistered
});

const mapDispatchToProps: IDispatchProps = {
  setIsRegistered
};

/**
 * Landing page parts wrapper.
 */
const LandingPage: FunctionComponent<IProps> = (props) => {
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
      {props.isRegistered !== false && <CookiePopup />}
      {props.isRegistered === false && <div><p>TODO: scraper</p></div>}
    </Wrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
