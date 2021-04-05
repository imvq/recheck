import ReviewCard from 'components/shared/ReviewCard';
import { IProps } from './types';
import { Wrapper, TitleWrapper, Title } from './styled';

/**
 * Section with user's reviews.
 */
export default (props: IProps) => (
  <Wrapper>
    <TitleWrapper>
      <Title>Отзывы обо мне:</Title>
    </TitleWrapper>
    <ReviewCard reviewCardData={props.reviewCardData} isAnonymous />
  </Wrapper>
);
