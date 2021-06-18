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
  return props.isSearchPopupVisible ? <SearchPopup /> : null;
};

export default connect(mapStateToProps)(SearchPopupManager);
