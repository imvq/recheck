import { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';

import { AppState, checkAuthorization, setPageUnlocked } from 'store';
import { IProps, IStateProps, IDispatchProps } from './types';

const mapStateToProps = (store: AppState): IStateProps => ({
  isAuthorized: store.auth.isAuthorized
});

const mapDispatchToProps: IDispatchProps = {
  checkAuthorization,
  unlockPage: setPageUnlocked
};

/**
 * Wrapper checking user's authentication status.
 */
const PageStartupManager: FunctionComponent<IProps> = (props) => {
  useEffect(() => {
    if (props.isAuthorized === null) {
      // If the page we load is the first website page for current session.
      // In that case we won't have isAuthorized flag set
      // so we have to call the API to check user's authorization.
      props.checkAuthorization(!props.noConfirmationCheckNeeded);
    }
  }, []);

  useEffect(() => {
    // If redirectHomeOnFail flag is set and the user is not authorized
    // we must redirect the user to home page.
    if (props.redirectHomeOnFail && props.isAuthorized !== null && !props.isAuthorized) {
      window.location.replace(window.location.origin);
    }

    if (!props.preventDefaultUnlock || props.isAuthorized) {
      props.unlockPage();
    }
  }, [props.isAuthorized]);

  return null;
};

export default connect(mapStateToProps, mapDispatchToProps)(PageStartupManager);
