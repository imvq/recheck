import withStyles from 'react-css-modules';

import TitleView from './TitleView';

import styles from './styles.module.scss';

export default withStyles(() => (
  <div styleName='MainSwipeView'>
    <TitleView />
  </div>
), styles);
