import withStyles from 'react-css-modules';

import styles from './styles.module.scss';

/**
 * Title of 'How to work' section.
 * Prsentational component.
 */
export default withStyles(() => (
  <div styleName='TitleView' id='HowToWorkTitle'>
    <div styleName='TitleView__TextWrapper'>
      <span styleName='TitleView__Text'>
        <span>Как работает </span>
        <span styleName='TitleView__Text--ColorpickMain'>re</span>
        <span styleName='TitleView__Text--ColorpickAux1'>Check</span>
        <span>?</span>
      </span>
    </div>
  </div>
), styles);
