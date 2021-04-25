import { connect } from 'react-redux';

import AuthPopup from 'components/shared/AuthPopup';
import { AppState } from 'store';
import { IStateProps, IProps } from './types';

const mapStateToProps = (store: AppState): IStateProps => ({
  isLoginPopupVisible: store.interaction.isLoginPopupVisible
});

/**
 * Component controlling login popup appearing/disappearing.
 * Non-presentational component.
 */
const AuthPopupManager = (props: IProps) => {
  return props.isLoginPopupVisible ? <AuthPopup /> : null;
};

export default connect(mapStateToProps)(AuthPopupManager);
