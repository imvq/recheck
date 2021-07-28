import { connect } from 'react-redux';

import { AppState } from 'store';
import { MainToolbarEntry } from 'utils/enums';
import Footer from 'components/shared/Footer';
import Menu from './Menu';
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
const ProfilePage = (props: types.IProps) => (
  <styled.Wrapper>
    <styled.Sidebar />

    <styled.AdaptedHeader />

    <styled.ContentWrapper>
      <styled.TitleWrapper>Мой профиль</styled.TitleWrapper>
      <Menu currentProfileInfo={props.currentProfileInfo} />
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

export default connect(mapStateToProps)(ProfilePage);
