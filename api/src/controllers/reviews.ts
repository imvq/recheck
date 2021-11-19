import { Router } from 'express';

import * as reviewsLogic from '@business/reviews';

/**
 * Controller for reviews.
 */
const router = Router();

router.get('/:privateToken/received/amount', reviewsLogic.getReceivedReviewsAmount);
router.get('/:privateToken/left/amount', reviewsLogic.getLeftReviewsAmount);

export default router;
