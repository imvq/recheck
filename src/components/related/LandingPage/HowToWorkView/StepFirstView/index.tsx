import withStyles from 'react-css-modules';

import Pic from 'assets/svg/LandingPage/HowToWorkView/StepFirstView/Pic.svg';
import ParagraphBackground from 'assets/svg/misc/StageFirstTextBck.svg';
import styles from './styles.module.scss';

/**
 * First part of 'How to work' section.
 * Presentational component.
 */
export default withStyles(() => (
  <div styleName='StepFirst'>
    <div styleName='StepFirst__CentralizingBox'>
      <div styleName='StepFirst__ImageWrapper'>
        <img
          styleName='StepFirst__Image'
          draggable='false'
          src={Pic}
          alt=''
        />
      </div>
    </div>

    <div styleName='StepFirst__CentralizingBox'>
      <div styleName='StepFirst__ParagraphWrapper'>
        <div styleName='StepFirst__TitleWrapper'>
          <h1 styleName='StepFirst__Title'>
            Воспользуйтесь поиском кандидата.
          </h1>
        </div>
        <p styleName='StepFirst__Text'>
          Для того чтобы начать поиск отзывов с прошлого
          места работы кандидата, необходимы имя, фамилия
          и LinkedIn
        </p>
        <img
          styleName='StepFirst__ParagraphBackground'
          src={ParagraphBackground}
          alt=''
        />
      </div>
    </div>
  </div>
), styles);
