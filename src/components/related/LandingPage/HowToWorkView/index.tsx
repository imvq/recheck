import withStyles from 'react-css-modules';

import TitleView from './TitleView';
import StepFirstView from './StepFirstView';
import StepSecondView from './StepSecondView';
import StepThirdView from './StepThirdView';

import styles from './styles.module.scss';

/**
 * 'How to work' view. Group of blocks describing work of the project.
 * Presentational component.
 */
export default withStyles(() => (
  <div styleName='HowToWork'>
    <TitleView />
    <StepFirstView />
    <StepSecondView />
    <StepThirdView />
  </div>
), styles);
