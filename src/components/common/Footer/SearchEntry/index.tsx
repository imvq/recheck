import { connect } from 'react-redux';
import withStyles from 'react-css-modules';

import { createSetSearchPopupDisplayStateAC } from 'store';
import { SearchEntryProps, SearchEntryDispatchProps } from './types';
import styles from './styles.module.scss';

const mapDispatchToProps: SearchEntryDispatchProps = {
  setIsSearchPopupVisible: createSetSearchPopupDisplayStateAC
};

/**
 * Search footer menu entry.
 * Presentational component.
 */
const View = withStyles(({ onClick }: SearchEntryProps) => (
  <span styleName='SearchEntry' role='none' onClick={onClick}>Поиск</span>
), styles);

/**
 * Wrapper for search footer menu entry.
 * Container component.
 */
const Container = ({ setIsSearchPopupVisible }: SearchEntryDispatchProps) => (
  <View onClick={() => setIsSearchPopupVisible(true)} />
);

export default connect(null, mapDispatchToProps)(Container);
