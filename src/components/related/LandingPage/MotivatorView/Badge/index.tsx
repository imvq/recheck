import withStyles from 'react-css-modules';

import { ReactComponent as LogoSVG } from 'assets/svg/logo/LogoFull.svg';
import { BadgeProps } from './types';
import styles from './styles.module.scss';

/**
 * Badge with text. Part of motivator section.
 * Presentational component.
 */
export default withStyles(({ text }: BadgeProps) => (
  <div styleName='Badge'>
    <div styleName='Badge__TitleWrapper'>
      <LogoSVG styleName='Badge__Logo' />
      <span>now</span>
    </div>
    <div styleName='Badge__Paragraph'><p>{text}</p></div>
  </div>
), styles);
