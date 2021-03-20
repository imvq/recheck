import { Link as ScrollLink } from 'react-scroll';
import withStyles from 'react-css-modules';

import styles from './styles.module.scss';

/**
 * Header buttons wrapper.
 * Presentational component.
 */
export default withStyles(() => (
  <div styleName='TabSection'>
    <ScrollLink to='HowToWorkTitle' spy smooth duration={300}>
      <button styleName='TabSection__Tab' type='button'>О платформе</button>
    </ScrollLink>
    <ScrollLink to='InfoblockTitle' spy smooth duration={600}>
      <button styleName='TabSection__Tab' type='button'>Преимущества</button>
    </ScrollLink>
    <ScrollLink to='MainSwipeViewTitle' spy smooth duration={900}>
      <button styleName='TabSection__Tab' type='button'>Отзывы</button>
    </ScrollLink>
  </div>
), styles);
