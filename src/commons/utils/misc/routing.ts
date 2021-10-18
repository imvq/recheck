/**
 * Routing stuff.
 */

import { historyManager } from 'commons/utils/services';

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
  | '/search';

export function jumpBack() {
  historyManager.goBack();
}

export function jumpTo(page: Page, continuation?: string) {
  historyManager.push(`${page}${continuation || ''}`);
}
