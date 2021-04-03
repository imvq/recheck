import Footer from './Footer';
import ProfileMenu from './ProfileMenu';
import {
  Wrapper, AdaptedHeader, ContentWrapper
} from './styled';

/**
 * Profile page. Used to view reviews.
 */
export default () => (
  <Wrapper>
    <AdaptedHeader />
    <ContentWrapper>
      <ProfileMenu />
    </ContentWrapper>
    <Footer />
  </Wrapper>
);
