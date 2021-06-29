import { connect } from 'react-redux';

import { useQuery } from 'utils/hooks';
import { setIsLoginPopupVisible, setReferral } from 'store';
import CookiePopup from 'components/shared/CookiePopup';
import AuthPopupManager from 'components/shared/AuthPopupManager';
import SearchPopupManager from 'components/shared/SearchPopupManager';
import GreetingsSection from './GreetingsSection';
import HowToWorkSection from './HowToWorkSection';
import InfoblockSection from './InfoblockSection';
import MainSwipeSection from './MainSwipeSection';
import MotivatorSection from './MotivatorSection';
import Footer from './Footer';

import * as types from './types';
import * as styled from './styled';

const mapDispatchToProps: types.IDispatchProps = {
  setIsLoginPopupVisible,
  setReferral
};

/**
 * Landing page parts wrapper.
 */
const LandingPage = (props: types.IProps) => {
  const query = useQuery();
  const referral = query.get('referral');

  if (referral) {
    props.setIsLoginPopupVisible(true);
    props.setReferral(referral);
  }

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
      <SearchPopupManager />
    </styled.Wrapper>
  );
};

export default connect(null, mapDispatchToProps)(LandingPage);
