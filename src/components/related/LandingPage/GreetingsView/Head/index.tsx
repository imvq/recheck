import React from 'react';
import withStyles from 'react-css-modules';

import TelegramButton from 'components/common/Button/Telegram';
import { ReactComponent as Logo } from 'assets/svg/logo/LogoFull.svg';
import styles from './styles.module.scss';

/**
 * Upper wrapper for logo and tabs.
 * Presentational component.
 */
const Head: React.FC = () => (
  <div styleName='Head'>
    <Logo styleName='Head__Logo' />
    <div>
      <button type='button'>Поиск</button>
      <button type='button'>О платформе</button>
      <button type='button'>Отзывы</button>
    </div>
    <div><TelegramButton /></div>
  </div>
);

export default withStyles(Head, styles);
