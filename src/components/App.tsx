import { Provider } from 'react-redux';

import { store as appStore } from 'store';
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
      <LandingPage />
    </Provider>
  </>
);
