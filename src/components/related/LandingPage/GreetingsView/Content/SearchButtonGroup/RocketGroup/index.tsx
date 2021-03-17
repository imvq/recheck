import withStyles from 'react-css-modules';

import RocketLine from 'assets/svg/LandingPage/GreetingsView/Content/SearchButtonGroup/RocketGroup/RocketLine.svg';
import Rocket from 'assets/svg/LandingPage/GreetingsView/Content/SearchButtonGroup/RocketGroup/Rocket.svg';
import styles from './styles.module.scss';

/**
 * Rocket and its path (represented as a separate object).
 * Presentational component.
 */
export default withStyles(() => (
  <div>
    <img styleName='RocketGroup__Line' src={RocketLine} alt='' draggable='false' />
    <img styleName='RocketGroup__Rocket' src={Rocket} alt='' draggable='false' />
  </div>
), styles);
