import withStyles from 'react-css-modules';

import { ReactComponent as CabinetIcon } from 'assets/svg/common/CabinetIcon.svg';
import { TelegramButtonProps } from './types';
import styles from './styles.module.scss';

/**
 * Programmed SVG component representing a Telegram bot button.
 * Presentational component.
 */
export default withStyles(({ onClick }: TelegramButtonProps) => (
  <div styleName='CabinetWrapper'>
    <CabinetIcon styleName='CabinetWrapper__Button' onClick={onClick} />
  </div>
), styles);
