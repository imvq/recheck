import { Router } from 'express';

import * as loginLogic from '@business/login';

/**
 * Controller for OAuth stuff.
 */
const router = Router();

router.post('/linkedin/exchange', loginLogic.exchangeLinkedInCode);

export default router;
