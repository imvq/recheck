import withStyles from 'react-css-modules';

import GreetingsContentPic from 'assets/images/GreetingsContentPic.png';
import styles from './styles.module.scss';

/**
 * Wrapper for greetings view's content.
 * Presentational component.
 */
export default withStyles(() => (
  <div styleName='Content'>
    <img styleName='Content__Pic' src={GreetingsContentPic} alt='' />
  </div>
), styles);
