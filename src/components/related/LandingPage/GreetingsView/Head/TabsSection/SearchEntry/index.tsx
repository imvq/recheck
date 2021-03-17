import { connect } from 'react-redux';
import withStyles from 'react-css-modules';

import { createSetSearchPopupDisplayStateAC } from 'store';
import { SearchEntryProps, SearchEntryDispatchProps } from './types';
import styles from './styles.module.scss';

const mapDispatchToProps: SearchEntryDispatchProps = {
  setIsSearchPopupVisible: createSetSearchPopupDisplayStateAC
};

/**
 * Search menu entry.
 * Presentational component.
 */
const View = withStyles(({ onClick }: SearchEntryProps) => (
  <button styleName='SearchEntry' type='button' onClick={onClick}>Поиск</button>
), styles);

/**
 * Wrapper for search menu entry.
 * Container component.
 */
const Container = ({ setIsSearchPopupVisible }: SearchEntryDispatchProps) => (
  <View onClick={() => setIsSearchPopupVisible(true)} />
);

export default connect(null, mapDispatchToProps)(Container);
