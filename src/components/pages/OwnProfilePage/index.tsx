import { useSelector } from 'react-redux';

import * as store from 'store';

import Footer from 'components/shared/Footer';

import { mainToolbarEntries } from 'commons/types/unions';

import AboutArea from './AboutArea';
import InviteArea from './InviteArea';
import ObservedUsersArea from './ObservedUsersArea';
import ReviewsArea from './ReviewsArea';
import WelcomeArea from './WelcomeArea';

import * as styled from './styled';

/**
 * Profile page. Used to view reviews.
 */
function OwnProfilePage() {
  const role = useSelector((state: store.AppState) => state.interaction.currentUserRole);
  const menu = useSelector((state: store.AppState) => state.interaction.currentMainToolbarEntry);

  return (
    <styled.OwnProfilePage>
      <styled.Sidebar />

      <styled.AdaptedHeader />

      <styled.ContentWrapper>
        <div id='ProfileTitle' />

        {(() => {
          switch (menu) {
            case mainToolbarEntries.AboutMe: return <AboutArea />;
            case mainToolbarEntries.Invite: return <InviteArea />;
            case mainToolbarEntries.MyReviews: return <ReviewsArea />;
            case mainToolbarEntries.ObservedUsers: return <ObservedUsersArea />;
            case mainToolbarEntries.Welcome: return role === 'recruiter'
              ? <ObservedUsersArea />
              : <AboutArea />;
            default: return <WelcomeArea />;
          }
        })()}
      </styled.ContentWrapper>

      <Footer />
    </styled.OwnProfilePage>
  );
}

export default OwnProfilePage;
