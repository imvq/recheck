import Header from 'components/shared/Header';
import {
  Wrapper, HeaderWrapper, InfoJustificationWrapper, InfoContentWrapper,
  ImageWrapper, AdaptedImage, AdaptedLink, Title, Subtitle, Span,
  ErrorSpanWrapper, LinksWrapper
} from './styled';

export default () => (
  <Wrapper>
    <HeaderWrapper><Header /></HeaderWrapper>
    <InfoJustificationWrapper>
      <InfoContentWrapper>
        <Title>Ой!</Title>
        <Subtitle>Похоже, мы не можем найти</Subtitle>
        <Subtitle>нужную вам страницу</Subtitle>
        <ErrorSpanWrapper>
          <Span pale>
            <Span>Код ошибки&nbsp;&nbsp;</Span>
            <Span increased>404</Span>
          </Span>
        </ErrorSpanWrapper>
        <Span thin reduced>Вот несколько полезных ссылок:</Span>
        <LinksWrapper>
          <AdaptedLink to='/'>На главную</AdaptedLink>
          <AdaptedLink to='/'>Новый поиск</AdaptedLink>
          <AdaptedLink to='/'>Личный кабинет</AdaptedLink>
        </LinksWrapper>
      </InfoContentWrapper>
    </InfoJustificationWrapper>
    <ImageWrapper><AdaptedImage /></ImageWrapper>
  </Wrapper>
);
