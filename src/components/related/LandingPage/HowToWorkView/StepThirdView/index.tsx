import withStyles from 'react-css-modules';

import Pic from 'assets/images/misc/StageThirdPic-min.png';
import ParagraphBackground from 'assets/svg/misc/StageThirdTextBck.svg';
import styles from './styles.module.scss';

/**
 * Last part of 'How to work' section.
 * Presentational component.
 */
export default withStyles(() => (
  <div styleName='StepThird'>
    <div styleName='StepThird__CentralizingBox'>
      <div styleName='StepThird__ImageWrapper'>
        <img
          styleName='StepThird__Image'
          draggable='false'
          src={Pic}
          alt=''
        />
      </div>
    </div>

    <div styleName='StepThird__CentralizingBox'>
      <div styleName='StepThird__ParagraphWrapper'>
        <div styleName='StepThird__TitileWrapper'>
          <h1 styleName='StepThird__Titile'>
            <span>Получите отзыв о кандидате в </span>
            <span styleName='StepThird__Titile--HighlightedMain'>re</span>
            <span styleName='StepThird__Titile--HighlightedAux1'>Check.</span>
          </h1>
        </div>
        <p styleName='StepThird__Text'>
          После этого вы получите информацию о кандидате.
          Если никто ещё не оставил отзыв, то мы поможем
          связаться с прошлым работодателем и предложим ему
          оставить отзыв о кандидате взамен на использование
          нашей платформы.
        </p>
        <img
          styleName='StepThird__ParagraphBackground'
          src={ParagraphBackground}
          alt=''
        />
      </div>
    </div>
  </div>
), styles);
