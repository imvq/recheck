import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { store as appStore } from 'store';
import OAuthFlowManager from 'components/shared/OAuthFlowManager';
import PageStartupManager from 'components/shared/PageStartupManager';
import PageLockManager from 'components/shared/PageLockManager';
import PageForceUnlocker from 'components/shared/PageForceUnlocker';
import GlobalStyle from 'components/shared/GlobalStyle';
import LandingPage from 'components/pages/LandingPage';
import LinkedInScraperPage from 'components/pages/LinkedInScraperPage';
import ProfilePage from 'components/pages/ProfilePage';
import ReviewPage from 'components/pages/ReviewPage';
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
            <PageStartupManager />
            <PageLockManager>
              <LandingPage />
            </PageLockManager>
          </Route>

          {/* Authorization redirect page. */}
          <Route path='/auth/confirm/rollback/:rollbackTo' exact>
            <OAuthFlowManager />
            <PageLockManager />
          </Route>

          {/* In case the user is authorzied first time */}
          {/* we need to get its LinkedIn profile page URL. */}
          <Route path='/scrape-linkedin' exact>
            <LinkedInScraperPage />
          </Route>

          {/* Profile page. */}
          {/* Use StartupManager to do checkAuth request to LinkedIn. */}
          {/* Check is needed to determine if we can show the page to user. */}
          {/* The result of the check is stored so that no check will be further. */}
          <Route path='/profile' exact>
            <PageStartupManager preventDefaultUnlock redirectHomeOnFail />
            <PageLockManager hideContentOnLock>
              <ProfilePage />
            </PageLockManager>
          </Route>

          {/* Review page. Used to add new reviews. */}
          <Route path='/review' exact>
            <PageStartupManager preventDefaultUnlock redirectHomeOnFail />
            <PageLockManager hideContentOnLock>
              <ReviewPage />
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
