import ReviewCard from 'components/reusables/ReviewCard';
import { IProps } from './types';
import { Wrapper, TitleWrapper, Title } from './styled';

/**
 * Section with user's reviews.
 */
export default (props: IProps) => (
  <Wrapper>
    <TitleWrapper>
      <Title>Отзывы, оставленные мной:</Title>
    </TitleWrapper>
    <ReviewCard reviewCardData={props.reviewCardData} isAnonymous />
  </Wrapper>
);
