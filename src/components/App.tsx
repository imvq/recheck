import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { store as appStore } from 'store';
import OAuthExchanger from 'components/reusables/OAuthExchanger';
import StartupManager from 'components/reusables/StartupManager';
import PageLockManager from 'components/reusables/PageLockManager';
import GlobalStyle from 'components/reusables/GlobalStyle';
import LandingPage from 'components/pages/LandingPage';
import ProfilePage from 'components/pages/ProfilePage';

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
          <Route path='/auth/confirm/rollback/:rollbackTo' exact>
            <OAuthExchanger />
            <PageLockManager />
          </Route>
          <Route path='/profile'>
            <StartupManager />
            <PageLockManager>
              <ProfilePage />
            </PageLockManager>
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  </>
);
