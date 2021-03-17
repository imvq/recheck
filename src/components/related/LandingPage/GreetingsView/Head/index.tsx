import withStyles from 'react-css-modules';

import LogoWrapper from './LogoWrapper';
import CabinetWrapper from './CabinetWrapper';
import TabsSection from './TabsSection';
import styles from './styles.module.scss';

/**
 * Upper wrapper for logo and tabs.
 * Presentational component.
 */
export default withStyles(() => (
  <div styleName='Head'>
    <LogoWrapper />
    <TabsSection />
    <CabinetWrapper />
  </div>
), styles);
