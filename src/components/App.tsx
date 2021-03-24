import { Provider } from 'react-redux';

import { store as appStore } from 'store';
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
      <PageLockManager>
        <LandingPage />
      </PageLockManager>
    </Provider>
  </>
);
