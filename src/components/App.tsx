import { Provider } from 'react-redux';
import { LinkedInPopUp } from 'react-linkedin-login-oauth2';
import { Router, Switch, Route } from 'react-router-dom';

import { store as appStore } from 'store';
import controlledHistory from 'utils/routing';
import UserConfirmationAwaiterPage from 'components/pages/UserConfirmationAwaiterPage';
import UserConfirmationPage from 'components/pages/UserConfirmationPage';
import ReviewConfirmationPage from 'components/pages/ReviewConfirmationPage';
import PageStartupManager from 'components/shared/PageStartupManager';
import PageLockManager from 'components/shared/PageLockManager';
import PageForceUnlocker from 'components/shared/PageForceUnlocker';
import GlobalStyle from 'components/shared/GlobalStyle';
import LandingPage from 'components/pages/LandingPage';
import ProfilePage from 'components/pages/ProfilePage';
import ReviewPage from 'components/pages/ReviewPage';
import SearchPage from 'components/pages/SearchPage';
import RegistrationPage from 'components/pages/RegistrationPage';
import NotFoundPage from 'components/pages/NotFoundPage';

/**
 * Main wrapper.
 * Container component.
 */
export default () => (
  <>
    <GlobalStyle />
    <Provider store={appStore}>
      <Router history={controlledHistory}>
        <Switch>

          {/* Home page. */}
          {/* Use StartupManager to do checkAuth request to LinkedIn. */}
          {/* The result of the check is stored so that no check will be further. */}
          <Route exact path='/'>
            <PageForceUnlocker />
            <PageStartupManager />
            <PageLockManager>
              <LandingPage />
            </PageLockManager>
          </Route>

          {/* Profile page. */}
          {/* Use StartupManager to do checkAuth request to LinkedIn. */}
          {/* Check is needed to determine if we can show the page to user. */}
          {/* The result of the check is stored so that no check will be further. */}
          <Route exact path='/profile'>
            <PageStartupManager preventDefaultUnlock redirectHomeOnFail />
            <PageLockManager hideContentOnLock>
              <ProfilePage />
            </PageLockManager>
          </Route>

          {/* Review page. Used to add new reviews. */}
          <Route exact path='/review'>
            <PageStartupManager preventDefaultUnlock redirectHomeOnFail />
            <PageLockManager hideContentOnLock>
              <ReviewPage />
            </PageLockManager>
          </Route>

          {/* Confirmation page. Used to  bind review with the user. */}
          <Route exact path='/review/connect/:uuid'>
            <PageStartupManager preventUnlockStrictly />
            <PageLockManager hideContentOnLock>
              <ReviewConfirmationPage />
            </PageLockManager>
          </Route>

          {/* Search page. Provide steps for searching candidates. */}
          <Route exact path='/register'>
            <PageForceUnlocker />
            <PageLockManager>
              <RegistrationPage />
            </PageLockManager>
          </Route>

          <Route exact path='/register/complete/:uuid'>
            <PageStartupManager preventUnlockStrictly noConfirmationCheckNeeded />
            <PageLockManager>
              <UserConfirmationPage />
            </PageLockManager>
          </Route>

          <Route exact path='/await-user-confirmation'>
            <PageForceUnlocker />
            <PageLockManager>
              <UserConfirmationAwaiterPage />
            </PageLockManager>
          </Route>

          <Route exact path='/search'>
            <SearchPage />
          </Route>

          {/* LinkedIn's OAuth2 window. */}
          <Route exact path='/linkedin'>
            <LinkedInPopUp />
          </Route>

          {/* 404 page. Used when proceed to invalid location. */}
          <Route>
            <NotFoundPage />
          </Route>

        </Switch>
      </Router>
    </Provider>
  </>
);
