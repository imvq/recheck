import withStyles from 'react-css-modules';

import { ReactComponent as CabinetIcon } from 'assets/svg/common/CabinetIcon.svg';
import { CabinetButtonProps } from './types';
import styles from './styles.module.scss';

/**
 * Button for login/logout.
 * Presentational component.
 */
export default withStyles(({ onClick }: CabinetButtonProps) => (
  <div styleName='CabinetWrapper'>
    <CabinetIcon styleName='CabinetWrapper__Button' onClick={onClick} />
  </div>
), styles);
