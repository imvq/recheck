import withStyles from 'react-css-modules';

import styles from './styles.module.scss';

/**
 * Title of infoblock.
 * Prsentational component.
 */
export default withStyles(() => (
  <div styleName='TitleView' id='InfoblockTitle'>
    <div styleName='TitleView__TextWrapper'>
      <span styleName='TitleView__Text'>
        <span>Дополнительный </span>
        <span styleName='TitleView__Text--ColorpickMain'>re</span>
        <span styleName='TitleView__Text--ColorpickAux1'>Check </span>
        <span>кандидатов</span>
      </span>
    </div>
  </div>
), styles);
