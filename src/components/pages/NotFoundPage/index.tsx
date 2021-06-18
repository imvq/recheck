import Header from 'components/shared/Header';

import * as styled from './styled';

export default () => (
  <styled.Wrapper>
    <styled.HeaderWrapper><Header /></styled.HeaderWrapper>
    <styled.InfoJustificationWrapper>
      <styled.InfoContentWrapper>
        <styled.Title>Ой!</styled.Title>
        <styled.Subtitle>Похоже, мы не можем найти</styled.Subtitle>
        <styled.Subtitle>нужную вам страницу</styled.Subtitle>

        <styled.ErrorSpanWrapper>
          <styled.Span pale>
            <styled.Span>Код ошибки&nbsp;&nbsp;</styled.Span>
            <styled.Span increased>404</styled.Span>
          </styled.Span>
        </styled.ErrorSpanWrapper>

        <styled.Span thin reduced>Вот несколько полезных ссылок:</styled.Span>
        <styled.LinksWrapper>
          <styled.AdaptedLink to='/'>На главную</styled.AdaptedLink>
          <styled.AdaptedLink to='/'>Новый поиск</styled.AdaptedLink>
          <styled.AdaptedLink to='/'>Личный кабинет</styled.AdaptedLink>
        </styled.LinksWrapper>
      </styled.InfoContentWrapper>
    </styled.InfoJustificationWrapper>
    <styled.ImageWrapper><styled.AdaptedImage /></styled.ImageWrapper>
  </styled.Wrapper>
);
