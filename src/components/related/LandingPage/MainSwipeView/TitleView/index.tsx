import withStyles from 'react-css-modules';

import styles from './styles.module.scss';

/**
 * Title of infoblock.
 * Prsentational component.
 */
export default withStyles(() => (
  <div styleName='TitleView'>
    <div styleName='TitleView__TextWrapper'>
      <span styleName='TitleView__Text'>
        <span>Примеры отзывов о кандидатах</span>
      </span>
    </div>
  </div>
), styles);
