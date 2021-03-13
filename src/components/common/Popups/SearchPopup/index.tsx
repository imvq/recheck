import withStyles from 'react-css-modules';

import SearchStage1Pic from 'assets/images/misc/SearchStage1Pic.png';
import { ReactComponent as FindButton } from 'assets/svg/btn/FindCandidate.svg';
import { SearchPopupProps } from './types';
import styles from './styles.module.scss';

/**
 * Popup activating on search button click.
 * Presentational component.
 */
export default withStyles(({ onClose }: SearchPopupProps) => (
  <div styleName='SearchPopup'>
    <div styleName='SearchPopup__Frame'>
      <div styleName='SearchPopup__StagePicWrapper'>
        <img styleName='SearchPopup__StagePic' src={SearchStage1Pic} alt='' />
      </div>
      <div styleName='SearchPopup__ContentWrapper'>
        <h1 styleName='SearchPopup__Header'>Поиск кандидата</h1>
        <input styleName='SearchPopup__Input' type='text' placeholder='Ссылка на LinkedIn' />
        <FindButton styleName='SearchPopup__Button' />
      </div>
    </div>
    <div
      styleName='SearchPopup__ClickableBackground'
      onClick={onClose}
      role='none'
    />
  </div>
), styles);
