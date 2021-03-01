import withStyles from 'react-css-modules';

import { ReactComponent as LineSVG } from 'assets/svg/misc/RocketLine.svg';
import Rocket from 'assets/images/Rocket.png';
import styles from './styles.module.scss';

/**
 * Rocket and its path (represented as a separate object).
 * Presentational component.
 */
export default withStyles(() => (
  <div>
    <LineSVG styleName='RocketGroup__Line' />
    <img styleName='RocketGroup__Rocket' src={Rocket} alt='' />
  </div>
), styles);
