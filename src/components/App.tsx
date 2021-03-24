import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { store as appStore } from 'store';
import OAuthManager from 'components/reusables/OAuthManager';
import StartupManager from 'components/reusables/StartupManager';
import PageLockManager from 'components/reusables/PageLockManager';
import GlobalStyle from 'components/reusables/GlobalStyle';
import LandingPage from 'components/pages/LandingPage';

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
          <Route path='/' exact>
            <StartupManager />
            <PageLockManager>
              <LandingPage />
            </PageLockManager>
          </Route>
          <Route path='/auth/confirm' exact>
            <OAuthManager />
            <PageLockManager>
              <LandingPage />
            </PageLockManager>
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  </>
);
