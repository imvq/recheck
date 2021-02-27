import React from 'react';
import withStyles from 'react-css-modules';

import styles from './index.module.scss';

/**
 * Upper wrapper for logo and tabs.
 * Presentational component.
 */
const Head: React.FC = () => (
  <div styleName='Head' />
);

export default withStyles(Head, styles);
