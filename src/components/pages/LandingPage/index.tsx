import { useEffect } from 'react';
import { connect } from 'react-redux';

import { useQuery } from 'commons/utils/hooks';
import { AppState, setIsLoginPopupVisible, setReferral, setAwaiter } from 'store';
import controlledHistory from 'commons/utils/routing';
import CookiePopup from 'components/shared/CookiePopup';
import AuthPopupManager from 'components/shared/AuthPopupManager';
import GreetingsSection from './GreetingsSection';
import HowToWorkSection from './HowToWorkSection';
import InfoblockSection from './InfoblockSection';
import MainSwipeSection from './MainSwipeSection';
import MotivatorSection from './MotivatorSection';
import Footer from './Footer';

import * as types from './types';
import * as styled from './styled';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  isAuthorized: store.auth.isAuthorized
});

const mapDispatchToProps: types.IDispatchProps = {
  setIsLoginPopupVisible,
  setReferral,
  setAwaiter
};

/**
 * Landing page parts wrapper.
 */
const LandingPage = (props: types.IProps) => {
  const query = useQuery();
  const referral = query.get('referral');
  const awaiter = query.get('awaiter');

  if (referral) {
    props.setReferral(referral);
  }

  if (awaiter) {
    props.setAwaiter(awaiter);
  }

  useEffect(() => {
    // Can be null.
    if ((referral || awaiter) && props.isAuthorized === false) {
      props.setIsLoginPopupVisible(true);
      return;
    }

    if (awaiter && props.isAuthorized === true) {
      controlledHistory.push('/review');
    }
  }, [props.isAuthorized]);

  return (
    <styled.Wrapper>
      <GreetingsSection />
      <HowToWorkSection />
      <InfoblockSection />
      <MainSwipeSection />
      <MotivatorSection />
      <Footer />
      <CookiePopup />
      <AuthPopupManager />
    </styled.Wrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
