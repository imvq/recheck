import CustomButton from 'components/shared/CustomButton';
import { Wrapper, TitleWrapper, Title } from './styled';

/**
 * Section with user's reviews.
 */
export default () => (
  <Wrapper>
    <TitleWrapper>
      <Title isHighlighted>Оставьте свой первый отзыв!</Title>
    </TitleWrapper>
    <CustomButton isDisabled={false}>Написать отзыв</CustomButton>
    <TitleWrapper isReduced>
      <Title isReduced>
        *За каждый оставленный вами отзыв вы получаете +1 поиск отзыва бесплатно
      </Title>
    </TitleWrapper>
  </Wrapper>
);
