import React from 'react';
import withStyles from 'react-css-modules';

import TelegramButton from 'components/common/Button/Telegram';
import logoFull from 'assets/svg/logoFull.svg';
import styles from './index.module.scss';

/**
 * Upper wrapper for logo and tabs.
 * Presentational component.
 */
const Head: React.FC = () => (
  <div styleName='Head'>
    <img styleName='Head__Logo' src={logoFull} alt='' />
    <div>
      <button type='button'>Поиск</button>
      <button type='button'>О платформе</button>
      <button type='button'>Отзывы</button>
    </div>
    <div><TelegramButton /></div>
  </div>
);

export default withStyles(Head, styles);
