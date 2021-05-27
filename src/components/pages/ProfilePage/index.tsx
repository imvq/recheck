import { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import { AppState } from 'store';
import { ProfileMenuEntry } from 'utils/enums';
import Footer from 'components/shared/Footer';
import { IProps, IStateProps } from './types';
import Menu from './Menu';
import ReviewsArea from './ReviewsArea';
import HistoryArea from './HistoryArea';
import AboutArea from './AboutArea';
import { Wrapper, TitleWrapper, AdaptedHeader, ContentWrapper } from './styled';

import exampleHistory from './exampleHistory';

const mapStateToProps = (store: AppState): IStateProps => ({
  currentProfileInfo: store.profile.currentProfileInfo,
  currentProfileMenuEntry: store.interaction.currentProfileMenuEntry
});

/**
 * Profile page. Used to view reviews.
 */
const ProfilePage: FunctionComponent<IProps> = (props) => (
  <Wrapper>
    <AdaptedHeader />
    <ContentWrapper>
      <TitleWrapper>Мой профиль</TitleWrapper>
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
    </ContentWrapper>
    <Footer />
  </Wrapper>
);

export default connect(mapStateToProps)(ProfilePage);
