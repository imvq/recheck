import PreviousSearchCard from 'components/shared/PreviousSearchCard';
import CustomButton from 'components/shared/CustomButton';

import * as types from './types';
import * as styled from './styled';

export default (props: types.IProps) => (
  <styled.Wrapper>
    {
    props.cardsData.length
      ? (
        <>
          <styled.TitleWrapper>
            <styled.Title>Прошлые поиски:</styled.Title>
          </styled.TitleWrapper>
          {props.cardsData.map(card => (
            <PreviousSearchCard key={card.name} cardData={card} />
          ))}
        </>
      )
      : (
        <>
          <styled.TitleWrapper>
            <styled.Title isHighlighted>Упс.. у вас ещё не было поисков</styled.Title>
          </styled.TitleWrapper>
          <CustomButton isDisabled={false}>Новый поиск</CustomButton>
        </>
      )
    }
  </styled.Wrapper>
);
