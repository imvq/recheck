import { Router } from 'express';

import * as reviewsLogic from '@business/reviews';

/**
 * Controller for reviews.
 */
const router = Router();

router.get('/reviews/:privateToken/received/amount', reviewsLogic.getReceivedReviewsAmount);
router.get('/reviews/:privateToken/left/amount', reviewsLogic.getLeftReviewsAmount);

export default router;
