import withStyles from 'react-css-modules';

import Swiper from './Swiper';
import TitleView from './TitleView';

import styles from './styles.module.scss';

export default withStyles(() => (
  <div styleName='MainSwipeView'>
    <TitleView />
    <Swiper />
  </div>
), styles);
