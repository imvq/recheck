import { Link as ScrollLink } from 'react-scroll';
import withStyles from 'react-css-modules';

import styles from './styles.module.scss';

/**
 * Header buttons wrapper.
 * Presentational component.
 */
export default withStyles(() => (
  <div styleName='Wrapper'>
    <button styleName='Tab' type='button'>Поиск</button>
    <ScrollLink to='HowToWorkTitle' spy smooth duration={300}>
      <button styleName='Tab' type='button'>О платформе</button>
    </ScrollLink>
    <ScrollLink to='MainSwipeViewTitle' spy smooth>
      <button styleName='Tab' type='button'>Отзывы</button>
    </ScrollLink>
  </div>
), styles);
