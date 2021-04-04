import PreviousSearchCard from 'components/reusables/PreviousSearchCard';
import { IProps } from './types';
import { Wrapper, TitleWrapper, Title } from './styled';

export default (props: IProps) => (
  <Wrapper>
    <TitleWrapper>
      <Title>Прошлые поиски:</Title>
    </TitleWrapper>
    {props.cardsData.map(card => (
      <PreviousSearchCard key={card.name} cardData={card} />
    ))}
  </Wrapper>
);
