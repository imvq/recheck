import { memo, useState, useEffect } from 'react';

import DemoReviewCard from './DemoReviewCard';

import examples from './examples';

import * as styled from './styled';

/**
 * Swipe area with review examples.
 */
function Swiper() {
  const [cards, setCards] = useState<JSX.Element[]>([]);

  useEffect(() => {
    setCards(examples.map(exampleData => (
      <DemoReviewCard key={exampleData.name} {...exampleData} />
    )));
  }, []);

  const onPrevClicked = () => {
    const [last] = cards.splice(2, 1);
    cards.unshift(last);
    setCards(cards.slice());
  };

  const onNextClicked = () => {
    const [first] = cards.splice(0, 1);
    cards.push(first);
    setCards(cards.slice());
  };

  return (
    <styled.Wrapper key={Math.random()}>
      <styled.ArrowLeft onClick={onPrevClicked} />
      <styled.JustificationWrapper>
        {cards.map(card => <styled.CardWrapper key={card.key}>{card}</styled.CardWrapper>)}
      </styled.JustificationWrapper>
      <styled.ArrowRight onClick={onNextClicked} />
    </styled.Wrapper>
  );
}

export default memo(Swiper);
