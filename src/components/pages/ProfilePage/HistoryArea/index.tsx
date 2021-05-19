import PreviousSearchCard from 'components/shared/PreviousSearchCard';
import CustomButton from 'components/shared/CustomButton';
import { IProps } from './types';
import { Wrapper, TitleWrapper, Title } from './styled';

export default (props: IProps) => (
  <Wrapper>
    {
    props.cardsData.length
      ? (
        <>
          <TitleWrapper>
            <Title>Прошлые поиски:</Title>
          </TitleWrapper>
          {props.cardsData.map(card => (
            <PreviousSearchCard key={card.name} cardData={card} />
          ))}
        </>
      )
      : (
        <>
          <TitleWrapper>
            <Title isHighlighted>Упс.. у вас ещё не было поисков</Title>
          </TitleWrapper>
          <CustomButton isDisabled={false}>Новый поиск</CustomButton>
        </>
      )
    }

  </Wrapper>
);
