import * as types from './types';
import * as styled from './styled';

/**
 * Card with review info about a person.
 */
export default (props: types.IProps) => (
  <styled.Wrapper>
    <styled.CardBody>
      <styled.PhotoWrapper>
        <styled.Photo src={props.photoUrl} alt='' />
      </styled.PhotoWrapper>
      <styled.TextWrapper>
        <styled.TitleWrapper>
          <styled.CardHeading enlarged>{props.name}</styled.CardHeading>
          <styled.LogoWrapper />
        </styled.TitleWrapper>

        <styled.TextContent>
          <styled.ParagraphWrapper>
            <styled.CardSpan lightened>Должность:&nbsp;&nbsp;&nbsp;&nbsp;</styled.CardSpan>
            <styled.CardSpan>{props.position}</styled.CardSpan>
          </styled.ParagraphWrapper>

          <styled.ParagraphWrapper>
            <styled.CardSpan lightened>Место работы:&nbsp;&nbsp;&nbsp;&nbsp;</styled.CardSpan>
            <styled.CardSpan>{props.company}</styled.CardSpan>
          </styled.ParagraphWrapper>

          <styled.ParagraphWrapper scale={0.5}>
            <styled.CardSpan lightened>Отзыв с предыдущего места работы:</styled.CardSpan>
          </styled.ParagraphWrapper>

          <styled.ParagraphJustified>{props.review}</styled.ParagraphJustified>
        </styled.TextContent>
      </styled.TextWrapper>
    </styled.CardBody>

    <styled.Toolbar>
      <styled.ReviewsLink href='/'>{`${props.nReviews} отзывов`}</styled.ReviewsLink>
      <styled.ButtonWrapper>
        <styled.DetailsButtonAdapted />
      </styled.ButtonWrapper>
      <styled.ButtonWrapper>
        <styled.FeedbackButtonSvgButtonAdapted />
      </styled.ButtonWrapper>
    </styled.Toolbar>
  </styled.Wrapper>
);
