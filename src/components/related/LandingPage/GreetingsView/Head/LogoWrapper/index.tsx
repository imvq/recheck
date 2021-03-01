import withStyles from 'react-css-modules';

import { ReactComponent as LogoSVG } from 'assets/svg/logo/LogoFull.svg';
import styles from './styles.module.scss';

/**
 * Main logo wrapper.
 * Presentational component.
 */
export default withStyles(() => (
  <div styleName='LogoWrapper'>
    <LogoSVG styleName='Logo' />
  </div>
), styles);
