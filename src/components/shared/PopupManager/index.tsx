import { memo } from 'react';
import { connect } from 'react-redux';

import SearchPopup from 'components/shared/SearchPopup';
import SpendFreeViewPopup from 'components/shared/SpendFreeViewPopup';

import { AppState } from 'store';

import * as types from './types';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  isSearchPopupVisible: store.interaction.isSearchPopupVisible,
  isSpendFreeViewPopupVisible: store.interaction.isSpendFreeViewPopupVisible
});

/**
 * Component controlling search popup appearing/disappearing.
 * Non-presentational component.
 */
function PopupManager(props: types.IProps) {
  if (props.isSearchPopupVisible) {
    return <SearchPopup onClose={props.onPopupClose} />;
  }

  if (props.isSpendFreeViewPopupVisible) {
    return <SpendFreeViewPopup />;
  }

  return null;
}

export default connect(mapStateToProps)(memo(PopupManager));
