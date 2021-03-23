import {
  Wrapper, CardBody, PhotoWrapper, TextWrapper, TextContent,
  Photo, TitleWrapper, CardHeading, CardSpan, LogoWrapper,
  ParagraphWrapper, ParagraphJustified, Toolbar, ReviewsLink,
  ButtonWrapper, DetailsButtonAdapted, FeedbackButtonSvgButtonAdapted
} from './styled';
import { ReviewCardProps } from './types';

/**
 * Card with review info about a person.
 */
export default (props: ReviewCardProps) => (
  <Wrapper>
    <CardBody>
      <PhotoWrapper><Photo src={props.photoUrl} alt='' /></PhotoWrapper>
      <TextWrapper>
        <TitleWrapper>
          <CardHeading enlarged>{props.name}</CardHeading>
          <LogoWrapper />
        </TitleWrapper>
        <TextContent>
          <ParagraphWrapper>
            <CardSpan lightened>Должность:&nbsp;&nbsp;&nbsp;&nbsp;</CardSpan>
            <CardSpan>{props.position}</CardSpan>
          </ParagraphWrapper>
          <ParagraphWrapper>
            <CardSpan lightened>Место работы:&nbsp;&nbsp;&nbsp;&nbsp;</CardSpan>
            <CardSpan>{props.company}</CardSpan>
          </ParagraphWrapper>
          <ParagraphWrapper scale={2}>
            <CardSpan lightened>Опыт работы:&nbsp;&nbsp;&nbsp;&nbsp;</CardSpan>
            <CardSpan>{props.experience}</CardSpan>
          </ParagraphWrapper>
          <ParagraphWrapper scale={0.5}>
            <CardSpan lightened>Отзыв с предыдущего места работы:</CardSpan>
          </ParagraphWrapper>
          <ParagraphJustified>{props.review}</ParagraphJustified>
        </TextContent>
      </TextWrapper>
    </CardBody>
    <Toolbar>
      <ReviewsLink href='/'>{`${props.nReviews} отзывов`}</ReviewsLink>
      <ButtonWrapper><DetailsButtonAdapted /></ButtonWrapper>
      <ButtonWrapper><FeedbackButtonSvgButtonAdapted /></ButtonWrapper>
    </Toolbar>
  </Wrapper>
);
