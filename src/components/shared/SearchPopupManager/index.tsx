import { memo } from 'react';
import { connect } from 'react-redux';

import SearchPopup from 'components/shared/SearchPopup';
import { AppState } from 'store';

import * as types from './types';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  isSearchPopupVisible: store.interaction.isSearchPopupVisible
});

/**
 * Component controlling search popup appearing/disappearing.
 * Non-presentational component.
 */
const SearchPopupManager = (props: types.IProps) => {
  return props.isSearchPopupVisible ? <SearchPopup onClose={props.onPopupClose} /> : null;
};

export default connect(mapStateToProps)(memo(SearchPopupManager));
