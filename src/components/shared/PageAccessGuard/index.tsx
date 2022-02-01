import { memo, useEffect } from 'react';
import { connect } from 'react-redux';

import * as store from 'store';

import PageLoader from 'components/shared/PageLoader';

import * as types from './types';

const mapStateToProps = (state: store.AppState): types.IStateProps => ({
  isAuthenticated: store.getIsUserAuthenticated(state),
  isConfirmed: state.profile.isConfirmed,
  isPageLocked: state.misc.isPageLocked
});

const mapDispatchToProps: types.IDispatchProps = {
  setIsPageLocked: store.setIsPageLocked,
  updateAuthorizationStatus: store.updateAuthorizationStatus
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
    if (props.isConfirmed === null) {
      props.updateAuthorizationStatus();
    }
  }, []);

  useEffect(() => {
    // If the page is for confirmed (authenticated) users only,
    // unconfirmed (unauthenticated) users must be redirected to the home page.
    //
    // Since it can be a complicated flow that leads to a page
    // wrapped with PageAccessGuard, native redirecting is used
    // It is needed to refresh the state of the app so that many issues can be avoided.

    if (props.forConfirmedUsersOnly && props.isConfirmed === false) {
      window.location.replace(window.location.origin);
      return;
    }

    if (props.forAuthenticatedUsersOnly && props.isAuthenticated === false) {
      window.location.replace(window.location.origin);
      return;
    }

    if (!props.preventDefaultUnlock) {
      props.setIsPageLocked(false);
    }
  }, [props.isAuthenticated, props.isConfirmed]);

  return (
    <>
      {props.isPageLocked && <PageLoader isTransparent={!props.hideContentOnLock} />}
      {props.children}
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(PageAccessGuard));
