import { connect } from 'react-redux';
import withStyles from 'react-css-modules';

import { ReactComponent as SearchSVG } from 'assets/svg/btn/Search.svg';
import { createSetSearchPopupDisplayStateAC } from 'store';
import RocketGroup from './RocketGroup';
import { SearchButtonProps, SearchButtonDispatchProps } from './types';
import styles from './styles.module.scss';

const mapDispatchToProps: SearchButtonDispatchProps = {
  setIsSearchPopupVisible: createSetSearchPopupDisplayStateAC
};

/**
 * Group of Programmed SVG components representing a search button
 * and a decorated SVG rocket attached to.
 * Presentational component.
 */
const View = withStyles(({ onClick }: SearchButtonProps) => (
  <div styleName='SearchButtonGroup'>
    <SearchSVG styleName='SearchButtonGroup__Button' onClick={onClick} />
    <RocketGroup />
  </div>
), styles);

/**
 * Wrapper for search button.
 * Container component.
 */
const Container = ({ setIsSearchPopupVisible }: SearchButtonDispatchProps) => (
  <View onClick={() => setIsSearchPopupVisible(true)} />
);

export default connect(null, mapDispatchToProps)(Container);
