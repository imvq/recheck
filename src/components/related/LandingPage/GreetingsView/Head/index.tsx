import React from 'react';
import withStyles from 'react-css-modules';

import logoFull from 'assets/svg/logoFull.svg';
import styles from './index.module.scss';

/**
 * Upper wrapper for logo and tabs.
 * Presentational component.
 */
const Head: React.FC = () => (
  <div styleName='Head'>
    <img styleName='Head__Logo' src={logoFull} alt='' />
    <div><span>tabtabtab</span></div>
    <div><button type='button'>telega</button></div>
  </div>
);

export default withStyles(Head, styles);
