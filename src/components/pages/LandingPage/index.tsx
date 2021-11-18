import { useEffect } from 'react';
import { connect } from 'react-redux';

import { useQuery } from 'commons/utils/misc';
import { AppState, setIsLoginPopupVisible, setInviterShareableId } from 'store';

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
  setInviterShareableId
};

/**
 * Landing page parts wrapper.
 */
const LandingPage = (props: types.IProps) => {
  const query = useQuery();
  const inviter = query.get('inviter');

  if (inviter) {
    props.setInviterShareableId(inviter);
  }

  useEffect(() => {
    // props.isAuthorized can be null.
    if (inviter && props.isAuthorized === false) {
      props.setIsLoginPopupVisible(true);
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
