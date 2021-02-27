import withStyles from 'react-css-modules';

import Head from './Head';
import Content from './Content';
import styles from './styles.module.scss';

/**
 * Greetings view. Upper block of the landing page.
 * Presentational component.
 */
export default withStyles(() => (
  <div styleName='GreetingsView'>
    <Head />
    <Content />
  </div>
), styles);
