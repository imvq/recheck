import { memo } from 'react';

import * as types from './types';
import * as styled from './styled';

const PhotoSection = memo((props: { photoUrl: string; }) => (
  <styled.PhotoWrapper>
    <styled.Photo src={props.photoUrl} alt='' />
  </styled.PhotoWrapper>
));

const HeadingSection = memo((props: { name: string; }) => (
  <styled.TitleWrapper>
    <styled.CardHeading enlarged>{props.name}</styled.CardHeading>
    <styled.LogoWrapper />
  </styled.TitleWrapper>
));

const PositionParagaph = memo((props: { position: string; }) => (
  <styled.ParagraphWrapper>
    <styled.CardSpan lightened>Должность:&nbsp;&nbsp;&nbsp;&nbsp;</styled.CardSpan>
    <styled.CardSpan>{props.position}</styled.CardSpan>
  </styled.ParagraphWrapper>
));

const CompanyParagraph = memo((props: { company: string; }) => (
  <styled.ParagraphWrapper>
    <styled.CardSpan lightened>Место работы:&nbsp;&nbsp;&nbsp;&nbsp;</styled.CardSpan>
    <styled.CardSpan>{props.company}</styled.CardSpan>
  </styled.ParagraphWrapper>
));

const ReviewParagraph = memo((props: { review: string; }) => (
  <>
    <styled.ParagraphWrapper scale={0.5}>
      <styled.CardSpan lightened>Отзыв с предыдущего места работы:</styled.CardSpan>
    </styled.ParagraphWrapper>

    <styled.ParagraphJustified>{props.review}</styled.ParagraphJustified>
  </>
));

const CardBody = memo((props: types.IProps) => (
  <styled.CardBody>
    <PhotoSection photoUrl={props.photoUrl} />

    <styled.TextWrapper>
      <HeadingSection name={props.name} />
      <styled.TextContent>
        <PositionParagaph position={props.position} />
        <CompanyParagraph company={props.company} />
        <ReviewParagraph review={props.review} />
      </styled.TextContent>
    </styled.TextWrapper>

  </styled.CardBody>
));

const Toolbar = memo((props: { nReviews: number; }) => (
  <styled.Toolbar>
    <styled.ReviewsLink href='/'>{`${props.nReviews} отзывов`}</styled.ReviewsLink>
    <styled.ButtonWrapper>
      <styled.DetailsButtonAdapted />
    </styled.ButtonWrapper>
    <styled.ButtonWrapper>
      <styled.FeedbackButtonSvgButtonAdapted />
    </styled.ButtonWrapper>
  </styled.Toolbar>
));

function DemoReviewCard(props: types.IProps) {
  return (
    <styled.DemoReviewCard>
      <CardBody {...props} />
      <Toolbar nReviews={props.nReviews} />
    </styled.DemoReviewCard>
  );
}

export default memo(DemoReviewCard);
