import { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { LinkedInPopUp } from 'react-linkedin-login-oauth2';
import { Router, Switch, Route } from 'react-router-dom';

import { historyManager } from 'commons/utils/services';
import { store as appStore } from 'store';

import NotFoundPage from 'components/pages/NotFoundPage';
import GlobalStyle from 'components/shared/GlobalStyle';
import PageAccessGuard from 'components/shared/PageAccessGuard';
import PurePageLockGuard from 'components/shared/PurePageLockGuard';

import 'react-toastify/dist/ReactToastify.min.css';

const LandingPage = lazy(() => import('components/pages/LandingPage'));

const ColleaguesPage = lazy(() => import('components/pages/ColleaguesPage'));
const ObservedProfilePage = lazy(() => import('components/pages/ObservedProfilePage'));
const OwnProfilePage = lazy(() => import('components/pages/OwnProfilePage'));
const PrivacyPolicyPage = lazy(() => import('components/pages/PrivacyPolicyPage'));
const RegistrationPage = lazy(() => import('components/pages/RegistrationPage'));
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
      <Router history={historyManager}>
        <Switch>

          {/* Home page. */}
          {/* Use StartupManager to do checkAuth request to LinkedIn. */}
          {/* The result of the check is stored so that no check will be further. */}
          <Route exact path='/'>
            <PageAccessGuard>
              <LandingPage />
            </PageAccessGuard>
          </Route>

          {/* List of colleagues available for review. */}
          <Route exact path='/colleagues'>
            <ColleaguesPage />
          </Route>

          {/* Profile of another user. */}
          <Route exact path='/profile/observe/:targetShareableId'>
            <PageAccessGuard forConfirmedUsersOnly hideContentOnLock>
              <ObservedProfilePage />
            </PageAccessGuard>
          </Route>

          {/* Own profile page. */}
          {/* Use StartupManager to do checkAuth request to LinkedIn. */}
          {/* Check is needed to determine if we can show the page to user. */}
          {/* The result of the check is stored so that no check will be further. */}
          <Route exact path='/profile'>
            <PageAccessGuard forConfirmedUsersOnly>
              <OwnProfilePage />
            </PageAccessGuard>
          </Route>

          {/* Provacy Policy needed to legitimate usage of OAuth. */}
          <Route exact path='/privacy-policy'>
            <PrivacyPolicyPage />
          </Route>

          {/* The registration page must be unaccessible directly to avoid manual entering */}
          {/* as it can cause state incoherence. */}
          <Route exact path='/register'>
            <PurePageLockGuard>
              <RegistrationPage />
            </PurePageLockGuard>
          </Route>

          {/* Review page. Used to add new reviews. */}
          <Route exact path='/review/create/:targetShareableId'>
            <PageAccessGuard hideContentOnLock preventDefaultUnlock>
              <ReviewPage />
            </PageAccessGuard>
          </Route>

          {/* Search page. Used to search users and companies. */}
          <Route exact path='/search'>
            <PageAccessGuard>
              <SearchPage />
            </PageAccessGuard>
          </Route>

          {/* Page with message persuading to check user's email. */}
          <Route exact path='/await-user-confirmation'>
            <UserConfirmationAwaiterPage />
          </Route>

          {/* Page to complete user's registration. User UUID needed. */}
          {/* Users are free to be unathorized because confirmation link is private. */}
          <Route exact path='/register/complete/:uuid'>
            <UserConfirmationPage />
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
