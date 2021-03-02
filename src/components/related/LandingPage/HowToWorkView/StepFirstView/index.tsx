import withStyles from 'react-css-modules';

import PicSVG from 'assets/svg/misc/StageFirstPic.svg';
import { ReactComponent as TextBackgroundSVG } from 'assets/svg/misc/StageFirstTextBck.svg';
import styles from './styles.module.scss';

export default withStyles(() => (
  <div styleName='StepFirst'>
    <div styleName='StepFirst__ImageWrapper'>
      <img src={PicSVG} alt='' />
    </div>
    <div styleName='StepFirst__TextWrapper'>
      <div styleName='StepFirst__Text'>
        <h1>Воспользуйтесь поиском кандидата.</h1>
        <p>
          Для того чтобы начать поиск отзывов с прошлого
          места работы кандидата, необходимы имя, фамилия
          и LinkedIn
        </p>
        <TextBackgroundSVG styleName='StepFirst__TextBackground' />
      </div>
    </div>
  </div>
), styles);
