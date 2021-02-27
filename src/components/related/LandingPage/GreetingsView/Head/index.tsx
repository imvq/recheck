import React from 'react';
import withStyles from 'react-css-modules';

import TelegramButton from 'components/common/Button/Telegram';
import { ReactComponent as Logo } from 'assets/svg/logo/LogoFull.svg';
import TabsSection from './TabsSection';
import styles from './styles.module.scss';

/**
 * Upper wrapper for logo and tabs.
 * Presentational component.
 */
export default withStyles(() => (
  <div styleName='Head'>
    <Logo />
    <TabsSection />
    <TelegramButton />
  </div>
), styles);
