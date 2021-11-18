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
  // From the very beginning we must check auth status.
  // There are 3 scenarios:
  // 1. We are authorized
  //    Reaction: we do nothing and just unlock the page.
  // 2. We visit the page while not being authorized but we have a saved access token.
  //    Reaction: we try to get profile data using OAuth access token.
  // 3. We visit the page while not being authorized and there's no access token stored.
  //    Reaction: we just do nothing (if the page needs user to be authorized then jump home).
  useEffect(() => {
    if (props.isAuthorized === null) {
      props.updateAuthorizationStatus();
    }
  }, []);

  useEffect(() => {
    if (props.forAuthorizedUsersOnly && props.isAuthorized === false) {
      window.location.replace(window.location.origin);
    }

    if (!props.preventDefaultUnlock) {
      props.setPageUnlocked();
    }
  }, [props.isAuthorized]);

  return (
    <>
      {props.isPageLocked && <PageLoader isTransparent={!props.hideContentOnLock} />}
      {props.children}
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(PageAccessGuard));
