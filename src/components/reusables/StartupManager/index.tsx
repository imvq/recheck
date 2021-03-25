import { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';

import { AppState, checkAuthorization } from 'store';
import { StartupManagerStateProps, StartupManagerDispatchProps, StartupManagerOwnProps } from './types';

const mapStateToProps = (store: AppState): StartupManagerStateProps => ({
  isAuthorized: store.auth.isAuthorized
});

const mapDispatchToProps: StartupManagerDispatchProps = {
  checkAuthorization
};

/**
 * Wrapper checking user's authentication status.
 * Container component.
 */
const StartupManager: FunctionComponent<
  StartupManagerOwnProps
  & StartupManagerStateProps
  & StartupManagerDispatchProps
> = (props) => {
  useEffect(() => props.checkAuthorization(), []);

  useEffect(() => {
    if (props.redirectHomeOnFail && props.isAuthorized != null && !props.isAuthorized) {
      window.location.replace(process.env.REACT_APP_START_PAGE as string);
    }
  }, [props.isAuthorized]);

  return <></>;
};

export default connect(mapStateToProps, mapDispatchToProps)(StartupManager);
