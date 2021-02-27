import React from 'react';
import withStyles from 'react-css-modules';

import { ReactComponent as TelegramSVG } from 'assets/svg/btn/Telegram.svg';
import { SocialButtonProps } from './types';
import styles from './index.module.scss';

export default withStyles(({ onClick }: SocialButtonProps) => (
  <TelegramSVG styleName='TelegramButton' onClick={onClick} />
), styles);
