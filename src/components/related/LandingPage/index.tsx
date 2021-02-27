import React from 'react';
import withStyles from 'react-css-modules';

import Footer from 'components/common/Footer';
import GreetingsView from './GreetingsView';
import HowToWorkView from './HowToWorkView';
import InfoblockView from './InfoblockView';
import MainSwipeView from './MainSwipeView';
import MotivatorView from './MotivatorView';

import styles from './index.module.scss';

/**
 * Landing page parts wrapper.
 * Presentational component.
 */
const LandingPage: React.FC = () => (
  <div styleName='LandingPage'>
    <GreetingsView />
    <HowToWorkView />
    <InfoblockView />
    <MainSwipeView />
    <MotivatorView />
    <Footer />
  </div>
);

export default withStyles(LandingPage, styles);
