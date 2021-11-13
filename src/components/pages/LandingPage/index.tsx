import { useEffect } from 'react';
import { connect } from 'react-redux';

import { jumpTo, useQuery } from 'commons/utils/misc';
import { AppState, setIsLoginPopupVisible, setInviter, setAwaiter } from 'store';

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
  isAuthorized: store.profile.isAuthorized
});

const mapDispatchToProps: types.IDispatchProps = {
  setIsLoginPopupVisible,
  setInviter,
  setAwaiter
};

/**
 * Landing page parts wrapper.
 */
const LandingPage = (props: types.IProps) => {
  const query = useQuery();
  const inviter = query.get('inviter');
  const awaiter = query.get('awaiter');

  if (inviter) {
    props.setInviter(inviter);
  }

  if (awaiter) {
    props.setAwaiter(awaiter);
  }

  useEffect(() => {
    // props.isAuthorized can be null.
    if (inviter && props.isAuthorized === false) {
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
