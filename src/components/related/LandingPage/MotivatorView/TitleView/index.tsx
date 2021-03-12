import withStyles from 'react-css-modules';

import styles from './styles.module.scss';

/**
 * Title of motivator section.
 * Prsentational component.
 */
export default withStyles(() => (
  <div styleName='TitleView'>
    <div styleName='TitleView__TextWrapper'>
      <span styleName='TitleView__Text'>
        <span>Нанимайте проще, быстрее, точнее!</span>
      </span>
    </div>
  </div>
), styles);
