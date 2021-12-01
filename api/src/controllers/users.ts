import { Router } from 'express';

import * as usersLogic from '@business/users';

/**
 * Controller for users stuff.
 */
const router = Router();

router.get('/profile/:accessToken', usersLogic.retrieveProfile);
router.get('/:privateToken/availability/review/:targetShareableId', usersLogic.canUserLeaveReview);

router.post('/availability/email', usersLogic.checkIfEmailIsAvailable);
router.post('/availability/user', usersLogic.checkIfUserCanBeViewed);
router.post('/availability/views', usersLogic.checkIfUserHasViewsAvailable);
router.post('/availability/user/provide', usersLogic.makeUserAvailable);
router.post('/registration/prepare', usersLogic.prepareUser);
router.post('/registration/confirming/apply', usersLogic.confirmRegistration);
router.post('/registration/confirming/resend', usersLogic.resendConfirmation);
router.post('/colleagues', usersLogic.getColleagues);

export default router;
