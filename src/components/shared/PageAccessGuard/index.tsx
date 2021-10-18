import { memo, useEffect } from 'react';
import { connect } from 'react-redux';

import { AppState, setPageUnlocked } from 'store';
import { updateAuthorizationStatus } from 'store/thunks';

import PageLoader from 'components/shared/PageLockManager/PageLoader';

import * as types from './types';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  isAuthorized: store.profile.isAuthorized,
  isPageLocked: store.interaction.isPageLocked
});

const mapDispatchToProps: types.IDispatchProps = {
  setPageUnlocked,
  updateAuthorizationStatus
};

function PageAccessGuard(props: types.IProps) {
  useEffect(() => {
    if (props.isAuthorized === null) {
      props.updateAuthorizationStatus();
    }
  }, []);

  useEffect(() => {
    if (props.redirectHomeOnFail && props.isAuthorized === false) {
      window.location.replace(window.location.origin);
    }

    props.setPageUnlocked();
  }, [props.isAuthorized]);

  return (
    <>
      {props.isPageLocked && <PageLoader isTransparent={!props.hideContentOnLock} />}
      {props.children}
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(PageAccessGuard));
