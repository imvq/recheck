import withStyles from 'react-css-modules';

import { BadgeProps } from './types';
import styles from './styles.module.scss';

/**
 * Badge with text. Part of motivator section.
 * Presentational component.
 */
export default withStyles(({ text }: BadgeProps) => (
  <div styleName='Badge'>
    <div styleName='Badge__TitleWrapper'>
      <span>
        <span styleName='Badge__LogoText Badge__LogoText--accent-main'>re</span>
        <span styleName='Badge__LogoText Badge__LogoText--accent-aux1'>Check</span>
      </span>
      <span>now</span>
    </div>
    <div styleName='Badge__Paragraph'><p>{text}</p></div>
  </div>
), styles, { allowMultiple: true });
