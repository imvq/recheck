import React from 'react';

import ReviewCard from 'components/reusables/ReviewCard';
import {
  Wrapper, JustificationWrapper, CardWrapper, ArrowLeft, ArrowRight
} from './styled';
import examples from './examples';

/**
 * Swipe area with review examples.
 */
export default () => {
  const [cards, setCards] = React.useState<JSX.Element[]>([]);
  React.useEffect(() => {
    setCards(examples.map(example => {
      return (
        <ReviewCard
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

  const onPrevClicked = React.useCallback(() => {
    const [last] = cards.splice(2, 1);
    cards.unshift(last);
    setCards(cards.slice());
  }, [cards]);

  const onNextClicked = React.useCallback(() => {
    const [first] = cards.splice(0, 1);
    cards.push(first);
    setCards(cards.slice());
  }, [cards]);

  return (
    <Wrapper key={Math.random()}>
      <ArrowLeft onClick={onPrevClicked} />
      <JustificationWrapper>
        {cards.map(card => <CardWrapper key={card.key}>{card}</CardWrapper>)}
      </JustificationWrapper>
      <ArrowRight onClick={onNextClicked} />
    </Wrapper>
  );
};
