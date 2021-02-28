import withStyles from 'react-css-modules';

import { ReactComponent as SearchSVG } from 'assets/svg/btn/Search.svg';
import { SearchButtonProps } from './types';
import styles from './styles.module.scss';

/**
 * Programmed SVG component representing a search button.
 * Presentational component.
 */
export default withStyles(({ onClick }: SearchButtonProps) => (
  <SearchSVG styleName='SearchButton' onClick={onClick} />
), styles);
