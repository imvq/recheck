import withStyles from 'react-css-modules';

import GreetingsContentPic from 'assets/images/GreetingsContentPic.png';
import SearchButtonGroup from './SearchButtonGroup';

import styles from './styles.module.scss';

/**
 * Wrapper for greetings view's content.
 * Presentational component.
 */
export default withStyles(() => (
  <div styleName='Content'>
    <div styleName='Content__PicWrapper'>
      <img styleName='Content__Pic' src={GreetingsContentPic} alt='' />
    </div>
    <div styleName='Content__TextWrapper'>
      <p styleName='Content__ActionGroup'>
        Найди отзывы о кандидате с прошлых мест работы
        <SearchButtonGroup />
      </p>
    </div>
  </div>
), styles);
