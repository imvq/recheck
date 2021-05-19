import ReviewCard from 'components/shared/ReviewCard';
import { IProps } from './types';
import { Wrapper, TitleWrapper, Title } from './styled';

/**
 * Section with user's reviews.
 */
export default (props: IProps) => (
  <Wrapper>
    <TitleWrapper>
      <Title isHighlighted>Никто ещё не оставил о вас отзыв :(</Title>
    </TitleWrapper>
  </Wrapper>
);
