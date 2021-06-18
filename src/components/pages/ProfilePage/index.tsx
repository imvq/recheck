import { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import { AppState } from 'store';
import { ProfileMenuEntry } from 'utils/enums';
import Footer from 'components/shared/Footer';
import SearchPopupManager from 'components/shared/SearchPopupManager';
import Menu from './Menu';
import ReviewsArea from './ReviewsArea';
import HistoryArea from './HistoryArea';
import AboutArea from './AboutArea';

import * as types from './types';
import * as styled from './styled';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  currentProfileInfo: store.profile.currentProfileInfo,
  currentProfileMenuEntry: store.interaction.currentProfileMenuEntry
});

/**
 * Profile page. Used to view reviews.
 */
const ProfilePage: FunctionComponent<types.IProps> = (props) => (
  <styled.Wrapper>
    <styled.Sidebar />

    <styled.AdaptedHeader withoutLogo />

    <styled.ContentWrapper>
      <styled.TitleWrapper>Мой профиль</styled.TitleWrapper>
      <Menu currentProfileInfo={props.currentProfileInfo} />
      {(() => {
        switch (props.currentProfileMenuEntry) {
          case ProfileMenuEntry.AboutMe:
            return <AboutArea />;
          case ProfileMenuEntry.History:
            return <HistoryArea cardsData={[]} />;
          default:
            return <ReviewsArea />;
        }
      })()}
    </styled.ContentWrapper>
    <Footer />
    <SearchPopupManager />
  </styled.Wrapper>
);

export default connect(mapStateToProps)(ProfilePage);
