import { useEffect } from 'react';
import { connect } from 'react-redux';

import { jumpTo, useQuery } from 'commons/utils/misc';
import { AppState, setIsLoginPopupVisible, setReferral, setAwaiter } from 'store';

import AuthPopupManager from 'components/shared/AuthPopupManager';
import CookiePopup from 'components/shared/CookiePopup';

import Footer from './Footer';
import GreetingsSection from './GreetingsSection';
import HowToWorkSection from './HowToWorkSection';
import InfoblockSection from './InfoblockSection';
import MainSwipeSection from './MainSwipeSection';
import MotivatorSection from './MotivatorSection';

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
    // props.isAuthorized can be null.
    if (referral && props.isAuthorized === false) {
      props.setIsLoginPopupVisible(true);
      return;
    }

    if (awaiter) {
      jumpTo('/review/', awaiter);
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
