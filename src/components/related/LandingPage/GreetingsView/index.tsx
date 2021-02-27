import React from 'react';
import withStyles from 'react-css-modules';

import Head from './Head';
import styles from './styles.module.scss';

/**
 * Upper block of the landing page.
 * Presentational component.
 */
const GreetingsView: React.FC = () => (
  <div styleName='GreetingsView'>
    <Head />
  </div>
);

export default withStyles(GreetingsView, styles);
