import { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import { AppState } from 'store';
import { IProps, IStateProps } from './types';
import Footer from './Footer';
import Menu from './Menu';
import ReviewsArea from './ReviewsArea';
import {
  Wrapper, AdaptedHeader, ContentWrapper
} from './styled';

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
      <Menu currentProfileInfo={props.currentProfileInfo} />
      {(() => {
        switch (props.currentProfileMenuEntry) {
          default:
            return <ReviewsArea />;
        }
      })()}
    </ContentWrapper>
    <Footer />
  </Wrapper>
);

export default connect(mapStateToProps)(ProfilePage);
