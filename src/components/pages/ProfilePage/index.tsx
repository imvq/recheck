import { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import { AppState } from 'store';
import { IProps, IStateProps } from './types';
import Footer from './Footer';
import ProfileMenu from './ProfileMenu';
import {
  Wrapper, AdaptedHeader, ContentWrapper
} from './styled';

const mapStateToProps = (store: AppState): IStateProps => ({
  currentProfileInfo: store.profile.currentProfileInfo
});

/**
 * Profile page. Used to view reviews.
 */
const ProfilePage: FunctionComponent<IProps> = (props) => (
  <Wrapper>
    <AdaptedHeader />
    <ContentWrapper>
      <ProfileMenu currentProfileInfo={props.currentProfileInfo} />
    </ContentWrapper>
    <Footer />
  </Wrapper>
);

export default connect(mapStateToProps)(ProfilePage);
