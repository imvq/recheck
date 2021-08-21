import { connect } from 'react-redux';

import { AppState } from 'store';
import { MainToolbarEntry } from 'commons/utils/enums';
import Footer from 'components/shared/Footer';
import ProfileHead from 'components/shared/ProfileHead';
import ReviewsArea from './ReviewsArea';
import HistoryArea from './HistoryArea';
import AboutArea from './AboutArea';

import * as types from './types';
import * as styled from './styled';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  currentProfileInfo: store.profile.currentProfileInfo,
  currentMainToolbarEntry: store.interaction.currentMainToolbarEntry
});

/**
 * Profile page. Used to view reviews.
 */
function OwnProfilePage(props: types.IProps) {
  return (
    <styled.Wrapper>
      <styled.Sidebar />

      <styled.AdaptedHeader />

      <styled.ContentWrapper>
        <styled.TitleWrapper id='ProfileTitle'>Мой профиль</styled.TitleWrapper>
        <ProfileHead profileInfo={props.currentProfileInfo} />
        {(() => {
          switch (props.currentMainToolbarEntry) {
            case MainToolbarEntry.ProfilePageAboutMe:
              return <AboutArea />;
            case MainToolbarEntry.ProfilePageHistory:
              return <HistoryArea cardsData={[]} />;
            default:
              return <ReviewsArea />;
          }
        })()}
      </styled.ContentWrapper>

      <Footer />
    </styled.Wrapper>
  );
}

export default connect(mapStateToProps)(OwnProfilePage);
