import { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import { AppState } from 'store';
import { ProfileMenuEntry } from 'utils/enums';
import { IProps, IStateProps } from './types';
import Footer from './Footer';
import Menu from './Menu';
import ReviewsArea from './ReviewsArea';
import AboutArea from './AboutArea';
import {
  Wrapper, TitleWrapper, AdaptedHeader, ContentWrapper
} from './styled';

import example from './exampleMyReview';

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
          case ProfileMenuEntry.ABOUT_ME:
            return <AboutArea reviewCardData={example} />;
          default:
            return <ReviewsArea reviewCardData={example} />;
        }
      })()}
    </ContentWrapper>
    <Footer />
  </Wrapper>
);

export default connect(mapStateToProps)(ProfilePage);
