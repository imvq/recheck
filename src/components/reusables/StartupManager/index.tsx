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
const StartupManager: FunctionComponent<IProps> = (props) => {
  useEffect(() => props.checkAuthorization(), []);

  useEffect(() => {
    if (props.redirectHomeOnFail && props.isAuthorized !== null && !props.isAuthorized) {
      window.location.replace(process.env.REACT_APP_START_PAGE as string);
    }

    props.unlockPage();
  }, [props.isAuthorized]);

  return <></>;
};

export default connect(mapStateToProps, mapDispatchToProps)(StartupManager);
