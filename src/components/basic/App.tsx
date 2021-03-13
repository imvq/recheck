import { Provider } from 'react-redux';
import { store as appStore } from 'store';

import LandingPage from 'components/related/LandingPage';

import 'styles/main.scss';

/**
 * Main wrapper.
 * Container component.
 */
export default () => (
  <Provider store={appStore}>
    <LandingPage />
  </Provider>
);
