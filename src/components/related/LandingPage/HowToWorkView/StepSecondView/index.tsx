import withStyles from 'react-css-modules';

import Pic from 'assets/svg/LandingPage/HowToWorkView/StepSecond/Pic.svg';
import ParagraphBackground from 'assets/svg/misc/StageSecondTextBck.svg';
import styles from './styles.module.scss';

/**
 * Middle part of 'How to work' section.
 * Presentational component.
 */
export default withStyles(() => (
  <div styleName='StepSecond'>

    <div styleName='StepSecond__CentralizingBox'>
      <div styleName='StepSecond__ParagraphWrapper'>
        <div styleName='StepSecond__TitleWrapper'>
          <h1 styleName='StepSecond__Title'>
            Взамен оставляйте отзыв о человеке из вашей команды.
          </h1>
        </div>
        <p styleName='StepSecond__Text'>
          Оставив отзыв о коллеге, с которым тесно работали,
          вы увидите информацию о кандидиате бесплатно.
          Также можете оформить платную подписку:)
        </p>
        <img
          styleName='StepSecond__ParagraphBackground'
          src={ParagraphBackground}
          alt=''
        />
      </div>
    </div>

    <div styleName='StepSecond__CentralizingBox'>
      <div styleName='StepSecond__ImageWrapper'>
        <img
          styleName='StepSecond__Image'
          draggable='false'
          src={Pic}
          alt=''
        />
      </div>
    </div>
  </div>
), styles);
