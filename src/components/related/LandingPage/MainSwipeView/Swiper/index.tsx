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

  return (
    <div styleName='Swiper'>
      <ArrowLeft styleName='Swiper__Arrow Swiper__Arrow--left-sided' />
      <div styleName='Swiper__JustificationWrapper'>
        <div styleName='Swiper__CardWrapper'>
          {cards[0]}
        </div>
        <div styleName='Swiper__CardWrapper'>
          {cards[1]}
        </div>
        <div styleName='Swiper__CardWrapper'>
          {cards[2]}
        </div>
      </div>
      <ArrowRight styleName='Swiper__Arrow Swiper__Arrow--right-sided' />
    </div>
  );
}, styles, { allowMultiple: true });
