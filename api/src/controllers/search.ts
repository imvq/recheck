import { Router } from 'express';

import * as searchLogic from '@business/search';

/**
 * Controller for search.
 */
const router = Router();

router.get('/user/:shareableId', searchLogic.searchUserByShareableId);

router.post('/users/tokens', searchLogic.searchUsersByTokens);
router.post('/quick/users/tokens', searchLogic.quickSearchUsersByTokens);
router.post('/quick/companies', searchLogic.quickSearchCompanies);
router.post('/predefined/companies/:last', searchLogic.getPredefinedCompanies);

export default router;
