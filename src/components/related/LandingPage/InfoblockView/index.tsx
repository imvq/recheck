import withStyles from 'react-css-modules';

import TitleView from './TitleView';
import InfoTimeSave from './InfoTimeSave';
import InfoEasement from './InfoEasement';
import InfoWarranty from './InfoWarranty';

import styles from './styles.module.scss';

/**
 * Additional info section.
 * Presentational component.
 */
export default withStyles(() => (
  <div styleName='InfoBlockView'>
    <TitleView />
    <InfoTimeSave />
    <InfoEasement />
    <InfoWarranty />
  </div>
), styles);
