import withStyles from 'react-css-modules';

import PicSVG from 'assets/svg/misc/StageFirstPic.svg';
import ParagraphBackground from 'assets/svg/misc/StageFirstTextBck.svg';
import styles from './styles.module.scss';

export default withStyles(() => (
  <div styleName='StepFirst'>
    <div styleName='StepFirst__CentralizingBox'>
      <div styleName='StepFirst__ImageWrapper'>
        <img src={PicSVG} alt='' />
      </div>
    </div>

    <div styleName='StepFirst__CentralizingBox'>
      <div styleName='StepFirst__ParagraphWrapper'>
        <div styleName='StepFirst__TitileWrapper'>
          <h1 styleName='StepFirst__Titile'>
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
