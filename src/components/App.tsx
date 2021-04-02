import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { store as appStore } from 'store';
import OAuthExchanger from 'components/reusables/OAuthExchanger';
import StartupManager from 'components/reusables/StartupManager';
import PageLockManager from 'components/reusables/PageLockManager';
import PageForceUnlocker from 'components/reusables/PageForceUnlocker';
import GlobalStyle from 'components/reusables/GlobalStyle';
import LandingPage from 'components/pages/LandingPage';
import ProfilePage from 'components/pages/ProfilePage';
import NotFoundPage from 'components/pages/NotFoundPage';

/**
 * Main wrapper.
 * Container component.
 */
export default () => (
  <>
    <GlobalStyle />
    <Provider store={appStore}>
      <BrowserRouter>
        <Switch>

          {/* Home page. */}
          {/* Use StartupManager to do checkAuth request to LinkedIn. */}
          {/* The result of the check is stored so that no check will be further. */}
          <Route path='/' exact>
            <PageForceUnlocker />
            <StartupManager />
            <PageLockManager>
              <LandingPage />
            </PageLockManager>
          </Route>

          {/* Authorization redirect page. */}
          <Route path='/auth/confirm/rollback/:rollbackTo' exact>
            <OAuthExchanger />
            <PageLockManager />
          </Route>

          {/* Profile page. */}
          {/* Use StartupManager to do checkAuth request to LinkedIn. */}
          {/* Check is needed to determine if we can show the page to user. */}
          {/* The result of the check is stored so that no check will be further. */}
          <Route path='/profile'>
            <StartupManager redirectHomeOnFail />
            <PageLockManager hideContentOnLock>
              <ProfilePage />
            </PageLockManager>
          </Route>

          {/* 404 page. Used when proceed to invalid location. */}
          <Route>
            <NotFoundPage />
          </Route>

        </Switch>
      </BrowserRouter>
    </Provider>
  </>
);
