import withStyles from 'react-css-modules';

import PicSVG from 'assets/svg/misc/StageSecondPic.svg';
import ParagraphBackground from 'assets/svg/misc/StageSecondTextBck.svg';
import styles from './styles.module.scss';

export default withStyles(() => (
  <div styleName='StepSecond'>

    <div styleName='StepSecond__CentralizingBox'>
      <div styleName='StepSecond__ParagraphWrapper'>
        <h1 styleName='StepSecond__Titile'>
          Взамен оставляйте отзыв о человеке из вашей команды.
        </h1>
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
        <img src={PicSVG} alt='' />
      </div>
    </div>
  </div>
), styles);
