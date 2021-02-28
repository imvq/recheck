import withStyles from 'react-css-modules';

import { ReactComponent as SearchSVG } from 'assets/svg/btn/Search.svg';
import RocketGroup from './RocketGroup';
import { SearchButtonProps } from './types';
import styles from './styles.module.scss';

/**
 * Group of Programmed SVG components representing a search button
 * and a decorated SVG rocket attached to.
 * Presentational component.
 */
export default withStyles(({ onClick }: SearchButtonProps) => (
  <div styleName='SearchButtonGroup'>
    <SearchSVG styleName='SearchButtonGroup__Button' onClick={onClick} />
    <RocketGroup />
  </div>
), styles);
