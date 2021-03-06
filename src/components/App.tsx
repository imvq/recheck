import { lazy, Suspense } from 'react';
import { Offline } from 'react-detect-offline';
import { LinkedInPopUp } from 'react-linkedin-login-oauth2';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { historyManager } from 'commons/utils/services';
import { store as appStore } from 'store';

import NotFoundPage from 'components/pages/NotFoundPage';
import ConnectionErrorPopup from 'components/shared/ConnectionErrorPopup';
import GlobalStyle from 'components/shared/GlobalStyle';
import PageAccessGuard from 'components/shared/PageAccessGuard';
import PopupManager from 'components/shared/PopupManager';
import PurePageLockGuard from 'components/shared/PurePageLockGuard';

import 'react-toastify/dist/ReactToastify.min.css';

const LandingPage = lazy(() => import('components/pages/LandingPage'));

const ObservedProfilePage = lazy(() => import('components/pages/ObservedProfilePage'));
const OwnProfilePage = lazy(() => import('components/pages/OwnProfilePage'));
const PrivacyPolicyPage = lazy(() => import('components/pages/PrivacyPolicyPage'));
const RegistrationPage = lazy(() => import('components/pages/RegistrationPage'));
const ReviewPage = lazy(() => import('components/pages/ReviewPage'));
const UserConfirmationAwaiterPage = lazy(() => import('components/pages/UserConfirmationAwaiterPage'));
const UserConfirmationPage = lazy(() => import('components/pages/UserConfirmationPage'));

const GuardedLandingPage = () => (
  <PageAccessGuard>
    <LandingPage />
  </PageAccessGuard>
);

const GuardedObservedProfilePage = () => (
  <PageAccessGuard forConfirmedUsersOnly hideContentOnLock>
    <ObservedProfilePage />
  </PageAccessGuard>
);

const GuardedProfilePage = () => (
  <PageAccessGuard forConfirmedUsersOnly>
    <OwnProfilePage />
  </PageAccessGuard>
);

const GuardedReviewPage = () => (
  <PageAccessGuard hideContentOnLock preventDefaultUnlock>
    <ReviewPage />
  </PageAccessGuard>
);

const GuardedRegistrationPage = () => (
  <PurePageLockGuard>
    <RegistrationPage />
  </PurePageLockGuard>
);

/**
 * Main wrapper.
 * Container component.
 */
export default () => (
  <Suspense fallback={null}>
    <GlobalStyle />

    <ToastContainer />

    <Offline><ConnectionErrorPopup /></Offline>

    <Provider store={appStore}>
      <PopupManager />

      <Router history={historyManager}>
        <Switch>

          {/* Home page. */}
          {/* Use StartupManager to do checkAuth request to LinkedIn. */}
          {/* The result of the check is stored so that no check will be further. */}
          <Route exact path='/' component={GuardedLandingPage} />

          {/* Profile of another user. */}
          <Route exact path='/profile/:targetShareableId' component={GuardedObservedProfilePage} />

          {/* Own profile page. */}
          {/* Use StartupManager to do checkAuth request to LinkedIn. */}
          {/* Check is needed to determine if we can show the page to user. */}
          {/* The result of the check is stored so that no check will be further. */}
          <Route exact path='/profile' component={GuardedProfilePage} />

          {/* Provacy Policy needed to legitimate usage of OAuth. */}
          <Route exact path='/privacy-policy' component={PrivacyPolicyPage} />

          {/* The registration page must be unaccessible directly to avoid manual entering */}
          {/* as it can cause state incoherence. */}
          <Route exact path='/register' component={GuardedRegistrationPage} />

          {/* Review page. Used to add new reviews. */}
          <Route exact path='/review/create/:targetShareableId' component={GuardedReviewPage} />

          {/* Page with message persuading to check user's email. */}
          <Route exact path='/await-user-confirmation' component={UserConfirmationAwaiterPage} />

          {/* Page to complete user's registration. User UUID needed. */}
          {/* Users are free to be unathorized because confirmation link is private. */}
          <Route exact path='/register/complete/:uuid' component={UserConfirmationPage} />

          {/* LinkedIn's OAuth2 window. */}
          <Route exact path='/linkedin' component={LinkedInPopUp} />

          {/* 404 page. Used when proceed to invalid location. */}
          <Route component={NotFoundPage} />

        </Switch>
      </Router>
    </Provider>
  </Suspense>
);
