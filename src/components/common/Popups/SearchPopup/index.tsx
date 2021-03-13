import withStyles from 'react-css-modules';

import { SearchPopupProps } from './types';
import styles from './styles.module.scss';

/**
 * Popup activating on search button click.
 * Presentational component.
 */
export default withStyles(({ onClose }: SearchPopupProps) => (
  <div styleName='SearchPopup'>
    <div styleName='SearchPopup__Frame' />
    <div
      styleName='SearchPopup__ClickableBackground'
      onClick={onClose}
      role='none'
    />
  </div>
), styles);
