import * as styled from './styled';

export default () => (
  <styled.Wrapper>
    <styled.Sidebar />

    <styled.AdaptedHeader id='Header' />

    <styled.ContentWrapper>
      <styled.Content />
    </styled.ContentWrapper>

    <styled.AdaptedFooter />
  </styled.Wrapper>
);
