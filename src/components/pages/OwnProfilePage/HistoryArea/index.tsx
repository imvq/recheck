import CustomButton from 'components/shared/CustomButton';
import PreviousSearchCard from 'components/shared/PreviousSearchCard';

import * as types from './types';
import * as styled from './styled';

function HistoryArea(props: types.IProps) {
  const Results = (
    <>
      <styled.TitleWrapper>
        <styled.Title>Прошлые поиски:</styled.Title>
      </styled.TitleWrapper>
      {props.cardsData.map(card => (
        <PreviousSearchCard key={card.name} cardData={card} />
      ))}
    </>
  );

  const NoResults = (
    <>
      <styled.TitleWrapper>
        <styled.Title isHighlighted>Упс.. у вас ещё не было поисков</styled.Title>
      </styled.TitleWrapper>
      <CustomButton isDisabled={false}>Новый поиск</CustomButton>
    </>
  );

  return (
    <styled.Wrapper>
      {props.cardsData.length ? Results : NoResults}
    </styled.Wrapper>
  );
}

export default HistoryArea;
