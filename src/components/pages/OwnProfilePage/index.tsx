import { connect } from 'react-redux';

import { mainToolbarEntries } from 'commons/types/unions';
import { AppState } from 'store';
import { getCurrentProfileInfo } from 'store/selectors';

import Footer from 'components/shared/Footer';

import AboutArea from './AboutArea';
import ObservedUsersArea from './ObservedUsersArea';
import ReviewsArea from './ReviewsArea';
import WelcomeArea from './WelcomeArea';

import * as types from './types';
import * as styled from './styled';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  currentProfileInfo: getCurrentProfileInfo(store),
  currentMainToolbarEntry: store.interaction.currentMainToolbarEntry
});

/**
 * Profile page. Used to view reviews.
 */
function OwnProfilePage(props: types.IProps) {
  return (
    <styled.OwnProfilePage>
      <styled.Sidebar />

      <styled.AdaptedHeader />

      <styled.ContentWrapper>
        <div id='ProfileTitle' />

        {(() => {
          switch (props.currentMainToolbarEntry) {
            case mainToolbarEntries.AboutMe:
              return <AboutArea />;
            case mainToolbarEntries.MyReviews:
              return <ReviewsArea />;
            case mainToolbarEntries.ObservedUsers:
              return <ObservedUsersArea />;
            default:
              return <WelcomeArea />;
          }
        })()}
      </styled.ContentWrapper>

      <Footer />
    </styled.OwnProfilePage>
  );
}

export default connect(mapStateToProps)(OwnProfilePage);
