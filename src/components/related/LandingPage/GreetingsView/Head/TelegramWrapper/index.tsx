import withStyles from 'react-css-modules';

import { ReactComponent as TelegramSVG } from 'assets/svg/btn/Telegram.svg';
import { TelegramButtonProps } from './types';
import styles from './styles.module.scss';

/**
 * Programmed SVG component representing a Telegram bot button.
 * Presentational component.
 */
export default withStyles(({ onClick }: TelegramButtonProps) => (
  <div styleName='Wrapper'>
    <TelegramSVG styleName='TelegramButton' onClick={onClick} />
  </div>
), styles);
