import { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';

import PageLoader from 'components/reusables/PageLoader';
import { AppState, createCheckAuthorizationThunk } from 'store';
import { SessionManagerStateProps, SessionManagerDispatchProps } from './types';

const mapStateToProps = (store: AppState): SessionManagerStateProps => ({
  isAuthorized: store.auth.isAuthorized
});

const mapDispatchToProps: SessionManagerDispatchProps = ({
  checkAuthorization: createCheckAuthorizationThunk
});

/**
 * Component for checking authorization status and preventing
 * users from doing stuff that might be inaccessible to them.
 */
const SessionManager: FunctionComponent<
  SessionManagerStateProps & SessionManagerDispatchProps
> = (props) => {
  useEffect(() => {
    props.checkAuthorization();
  }, [props.isAuthorized]);

  return props.isAuthorized == null
    ? <PageLoader>{props.children}</PageLoader>
    : <>{props.children}</>;
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionManager);
