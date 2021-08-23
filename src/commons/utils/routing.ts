import { createBrowserHistory } from 'history';

const controlledBrowserHistory = createBrowserHistory();

export default controlledBrowserHistory;

export function jumpToSearchPage() {
  controlledBrowserHistory.push('/search');
}
