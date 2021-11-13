import { Router } from 'express';

import * as usersLogic from '@business/users';

/**
 * Controller for users stuff.
 */
const router = Router();

router.get('/profile', usersLogic.retrieveProfile);

router.post('/availability/email', usersLogic.checkIfEmailIsAvailable);
router.post('/availability/user', usersLogic.checkIfUserCanBeViewed);
router.post('/registration/prepare', usersLogic.prepareUser);
router.post('/registration/confirming/apply', usersLogic.confirmRegistration);
router.post('/registration/confirming/resend', usersLogic.resendConfirmation);

export default router;
