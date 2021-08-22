import Header from 'components/shared/Header';

import * as styled from './styled';

const Title = (
  <>
    <styled.Title>Ой!</styled.Title>
    <styled.Subtitle>Похоже, мы не можем найти</styled.Subtitle>
    <styled.Subtitle>нужную вам страницу</styled.Subtitle>
  </>
);

const ErrorView = (
  <styled.ErrorSpanWrapper>
    <styled.Span pale>
      <styled.Span>Код ошибки&nbsp;&nbsp;</styled.Span>
      <styled.Span increased>404</styled.Span>
    </styled.Span>
  </styled.ErrorSpanWrapper>
);

const Links = (
  <>
    <styled.Span thin reduced>Вот несколько полезных ссылок:</styled.Span>
    <styled.LinksWrapper>
      <styled.AdaptedLink to='/'>На главную</styled.AdaptedLink>
      <styled.AdaptedLink to='/'>Новый поиск</styled.AdaptedLink>
      <styled.AdaptedLink to='/'>Личный кабинет</styled.AdaptedLink>
    </styled.LinksWrapper>
  </>
);

function NotFoundPage() {
  return (
    <styled.Wrapper>
      <styled.HeaderWrapper><Header /></styled.HeaderWrapper>
      <styled.InfoJustificationWrapper>
        <styled.InfoContentWrapper>
          {Title}
          {ErrorView}
          {Links}
        </styled.InfoContentWrapper>
      </styled.InfoJustificationWrapper>
      <styled.ImageWrapper><styled.AdaptedImage /></styled.ImageWrapper>
    </styled.Wrapper>
  );
}

export default NotFoundPage;
