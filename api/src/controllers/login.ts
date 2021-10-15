import { Router, Request, Response } from 'express';

import * as loginLogic from '@business/login';

/**
 * Controller for OAuth stuff.
 */
const router = Router();

router.post('/linkedin/exchange', (request: Request, response: Response) => {
  loginLogic.exchangeLinkedInCode(request, response);
});

export default router;
