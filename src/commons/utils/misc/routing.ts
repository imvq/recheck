/**
 * Routing stuff.
 */

import { historyManager, memoryHistoryManager } from 'commons/utils/services';

type Page = '/'
  | '/404'
  | '/privacy-policy'
  | '/profile'
  | '/profile/observe/'
  | '/review/'
  | '/review/connect'
  | '/register'
  | '/register/complete'
  | '/await-user-confirmation'
  | '/search'
  | '/colleagues';

export function jumpBack() {
  historyManager.goBack();
}

export function jumpTo(page: Page, continuation?: string) {
  if (page === '/register') {
    memoryHistoryManager.push(page);
    return;
  }

  historyManager.push(`${page}${continuation || ''}`);
}
