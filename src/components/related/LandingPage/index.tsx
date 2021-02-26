import React from 'react';
import withStyles from 'react-css-modules';

import styles from './index.module.scss';

const LandingPage: React.FC = () => (
  <div styleName='LandingPage'>
    <p>Landing</p>
  </div>
);

export default withStyles(LandingPage, styles);
