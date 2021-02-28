import withStyles from 'react-css-modules';

import { ReactComponent as LineSVG } from 'assets/svg/misc/RocketLine.svg';
import Rocket from 'assets/images/Rocket.png';
import styles from './styles.module.scss';

export default withStyles(() => (
  <div>
    <LineSVG styleName='RocketGroup__Line' />
    <img styleName='RocketGroup__Rocket' src={Rocket} alt='' />
  </div>
), styles);
