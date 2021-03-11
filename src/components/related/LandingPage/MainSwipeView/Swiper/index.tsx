import React from 'react';
import withStyles from 'react-css-modules';

import ReviewCard from 'components/common/ReviewCard';
import { ReactComponent as ArrowLeft } from 'assets/svg/btn/ArrowLeft.svg';
import { ReactComponent as ArrowRight } from 'assets/svg/btn/ArrowRight.svg';
import styles from './styles.module.scss';
import examples from './examples';

/**
 * Swipe area with review examples.
 * Presentational component.
 */
export default withStyles(() => {
  const [cards, setCards] = React.useState<JSX.Element[]>([]);
  React.useEffect(() => {
    setCards(examples.map(example => {
      return (
        <ReviewCard
          name={example.name}
          photoUrl={example.photoUrl}
          position={example.company}
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
    <div styleName='Swiper'>
      <ArrowLeft
        styleName='Swiper__Arrow Swiper__Arrow--left-sided'
        onClick={onPrevClicked}
      />
      <div styleName='Swiper__JustificationWrapper'>
        {cards.map(card => <div styleName='Swiper__CardWrapper'>{card}</div>)}
      </div>
      <ArrowRight
        styleName='Swiper__Arrow Swiper__Arrow--right-sided'
        onClick={onNextClicked}
      />
    </div>
  );
}, styles, { allowMultiple: true });
