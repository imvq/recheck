import { Router } from 'express';

import * as usersLogic from '@business/users';

/**
 * Controller for Users stuff.
 */
const router = Router();

router.get('/profile', usersLogic.retrieveProfile);
router.post('/availability/email', usersLogic.checkIfEmailIsAvailable);

export default router;
