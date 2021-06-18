import { useState, useEffect } from 'react';

import DemoReviewCard from 'components/shared/DemoReviewCard';
import examples from './examples';

import * as styled from './styled';

/**
 * Swipe area with review examples.
 */
export default () => {
  const [cards, setCards] = useState<JSX.Element[]>([]);

  useEffect(() => {
    setCards(examples.map(example => {
      return (
        <DemoReviewCard
          key={example.name}
          name={example.name}
          photoUrl={example.photoUrl}
          position={example.position}
          company={example.company}
          experience={example.experience}
          review={example.review}
          nReviews={example.nReviews}
        />
      );
    }));
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
};
