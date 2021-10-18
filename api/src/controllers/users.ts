import { Router } from 'express';

import * as usersLogic from '@business/users';

/**
 * Controller for Users stuff.
 */
const router = Router();

router.post('/profile', usersLogic.retrieveProfile);

export default router;
