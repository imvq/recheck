import { memo } from 'react';
import { connect } from 'react-redux';

import AuthPopup from 'components/shared/AuthPopup';
import { AppState } from 'store';

import * as types from './types';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  isLoginPopupVisible: store.interaction.isLoginPopupVisible
});

/**
 * Component controlling login popup appearing/disappearing.
 * Non-presentational component.
 */
const AuthPopupManager = (props: types.IProps) => {
  return props.isLoginPopupVisible ? <AuthPopup /> : null;
};

export default connect(mapStateToProps)(memo(AuthPopupManager));
