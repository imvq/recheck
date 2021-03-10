import withStyles from 'react-css-modules';

import { ReactComponent as LogoSVG } from 'assets/svg/logo/LogoFull.svg';
import { ReactComponent as DetailsButton } from 'assets/svg/btn/Details.svg';
import { ReactComponent as GiveFeedbackButton } from 'assets/svg/btn/GiveFeedback.svg';
import Lada from 'assets/images/photos/Lada.png';
import styles from './styles.module.scss';

import { ReviewCardProps } from './types';

/**
 * Card with review info about a person.
 * Presentational component.
 */
export default withStyles(({
  name, company, position, experience, review, nReviews
}: ReviewCardProps) => (
  <div styleName='ReviewCard'>
    <div styleName='ReviewCard__Body'>
      <div styleName='ReviewCard__PhotoWrapper'>
        <img styleName='ReviewCard__Photo' src={Lada} alt='' />
      </div>
      <div styleName='ReviewCard__TextWrapper'>
        <div styleName='ReviewCard__TitleWrapper'>
          <h1 styleName='ReviewCard__Text ReviewCard__Text--enlarged'>{name}</h1>
          <LogoSVG styleName='ReviewCard__Logo' />
        </div>
        <div styleName='ReviewCard__TextContent'>
          <p styleName='ReviewCard__ParagraphWrapper'>
            <span styleName='ReviewCard__Text ReviewCard__Text--lighten'>
              Должность:&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span>{position}</span>
          </p>
          <p styleName='ReviewCard__ParagraphWrapper'>
            <span styleName='ReviewCard__Text ReviewCard__Text--lighten'>
              Место работы:&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span>{company}</span>
          </p>
          <p styleName='ReviewCard__ParagraphWrapper ReviewCard__ParagraphWrapper--double'>
            <span styleName='ReviewCard__Text ReviewCard__Text--lighten'>
              Опыт работы:&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span>{experience}</span>
          </p>
          <p styleName='ReviewCard__ParagraphWrapper--half'>
            <span styleName='ReviewCard__Text ReviewCard__Text--lighten'>
              Отзыв с предыдущего места работы:
            </span>
          </p>
          <p styleName='ReviewCard__ParagraphJustified'>{review}</p>
        </div>
      </div>
    </div>
    <div styleName='ReviewCard__Toolbar'>
      <a href='/' styleName='ReviewCard__ReviewLinks'>{`${nReviews} отзывов`}</a>
      <DetailsButton styleName='ReviewCard__Button' />
      <div styleName='ReviewCard__LastButtonWrapper'>
        <GiveFeedbackButton styleName='ReviewCard__Button' />
      </div>
    </div>
  </div>
), styles, { allowMultiple: true });
