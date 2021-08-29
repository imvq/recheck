import { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { LinkedInPopUp } from 'react-linkedin-login-oauth2';
import { Router, Switch, Route } from 'react-router-dom';

import { store as appStore } from 'store';
import controlledHistory from 'commons/utils/routing';
import GlobalStyle from 'components/shared/GlobalStyle';
import NotFoundPage from 'components/pages/NotFoundPage';
import PageLockManager from 'components/shared/PageLockManager';
import PageForceUnlocker from 'components/shared/PageForceUnlocker';
import PageStartupManager from 'components/shared/PageStartupManager';

import 'react-toastify/dist/ReactToastify.min.css';

const LandingPage = lazy(() => import('components/pages/LandingPage'));
const ObservedProfilePage = lazy(() => import('components/pages/ObservedProfilePage'));
const OwnProfilePage = lazy(() => import('components/pages/OwnProfilePage'));
const PrivacyPllicyPage = lazy(() => import('components/pages/PrivacyPolicyPage'));
const RegistrationPage = lazy(() => import('components/pages/RegistrationPage'));
const ReviewConfirmationPage = lazy(() => import('components/pages/ReviewConfirmationPage'));
const ReviewPage = lazy(() => import('components/pages/ReviewPage'));
const SearchPage = lazy(() => import('components/pages/SearchPage'));
const UserConfirmationAwaiterPage = lazy(() => import('components/pages/UserConfirmationAwaiterPage'));
const UserConfirmationPage = lazy(() => import('components/pages/UserConfirmationPage'));

/**
 * Main wrapper.
 * Container component.
 */
export default () => (
  <Suspense fallback={<></>}>
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

          {/* Provacy Policy needed for legitimate usage of OAuth. */}
          <Route exact path='/privacy-policy'>
            <PrivacyPllicyPage />
          </Route>

          {/* Own profile page. */}
          {/* Use StartupManager to do checkAuth request to LinkedIn. */}
          {/* Check is needed to determine if we can show the page to user. */}
          {/* The result of the check is stored so that no check will be further. */}
          <Route exact path='/profile'>
            <PageStartupManager preventDefaultUnlock redirectHomeOnFail />
            <PageLockManager hideContentOnLock>
              <OwnProfilePage />
            </PageLockManager>
          </Route>

          {/* Profile of another user. */}
          <Route exact path='/profile/observe/:targetShareableId'>
            <PageStartupManager preventDefaultUnlock redirectHomeOnFail />
            <PageLockManager hideContentOnLock>
              <ObservedProfilePage />
            </PageLockManager>
          </Route>

          {/* Review page. Used to add new reviews. */}
          <Route exact path='/review/:targetShareableId'>
            <PageStartupManager preventUnlockStrictly redirectHomeOnFail />
            <PageLockManager hideContentOnLock>
              <ReviewPage />
            </PageLockManager>
          </Route>

          {/* Confirmation page. Used to bind review with the user. Review UUID needed. */}
          <Route exact path='/review/connect/:uuid'>
            <PageStartupManager preventUnlockStrictly />
            <PageLockManager>
              <ReviewConfirmationPage />
            </PageLockManager>
          </Route>

          {/* Registration page. Users are supposed to be authorized. */}
          <Route exact path='/register'>
            <PageStartupManager preventDefaultUnlock redirectHomeOnFail redirectHomeOnRegistered />
            <RegistrationPage />
          </Route>

          {/* Page to help complete user's registration. User UUID needed. */}
          {/* The user must be logged in as well. */}
          <Route exact path='/register/complete/:uuid'>
            <PageStartupManager preventUnlockStrictly noConfirmationCheckNeeded />
            <PageLockManager>
              <UserConfirmationPage />
            </PageLockManager>
          </Route>

          {/* Page with message persuading to check user's email. */}
          <Route exact path='/await-user-confirmation'>
            <PageForceUnlocker />
            <PageLockManager>
              <UserConfirmationAwaiterPage />
            </PageLockManager>
          </Route>

          {/* Search page. Used to search users and companies. */}
          <Route exact path='/search'>
            <PageStartupManager preventDefaultUnlock redirectHomeOnFail />
            <PageLockManager>
              <SearchPage />
            </PageLockManager>
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
  </Suspense>
);
