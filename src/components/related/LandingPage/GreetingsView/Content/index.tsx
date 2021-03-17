import withStyles from 'react-css-modules';

import ContentPic from 'assets/svg/LandingPage/GreetingsView/Content/ContentPic.svg';
import SearchButtonGroup from './SearchButtonGroup';

import styles from './styles.module.scss';

/**
 * Wrapper for greetings view's content.
 * Presentational component.
 */
export default withStyles(() => (
  <div styleName='Content'>
    <div styleName='Content__PicWrapper'>
      <img
        styleName='Content__Pic'
        src={ContentPic}
        alt=''
        draggable='false'
      />
    </div>
    <div styleName='Content__TextWrapper'>
      <div styleName='Content__ActionGroup'>
        <span>Найди отзывы о кандидате с прошлых мест работы</span>
        <SearchButtonGroup />
      </div>
    </div>
  </div>
), styles);
