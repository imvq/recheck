/**
 * Routing stuff.
 */

import { historyManager } from 'commons/utils/services';

type Page = '/'
  | '/404'
  | '/privacy-policy'
  | '/profile'
  | '/profile/'
  | '/review/'
  | '/review/connect'
  | '/register'
  | '/register/complete'
  | '/await-user-confirmation'
  | '/colleagues';

export function jumpBack() {
  historyManager.goBack();
}

export function jumpTo(page: Page, continuation?: string) {
  historyManager.push(`${page}${continuation || ''}`);
}
