import { Router } from 'express';

import * as reviewsLogic from '@business/reviews';

/**
 * Controller for reviews.
 */
const router = Router();

router.get('/availability', reviewsLogic.checkIfUserIsAvailableForReview);
router.get('/:privateToken/received/amount', reviewsLogic.getReceivedReviewsAmount);
router.get('/:privateToken/:targetShareableId/received/amount', reviewsLogic.getObservedReviewsAmount);
router.get('/:privateToken/received/:n', reviewsLogic.getNthReceivedReview);
router.get('/:privateToken/:targetShareableId/received/:n', reviewsLogic.getNthObservedReview);
router.get('/:privateToken/left/amount', reviewsLogic.getLeftReviewsAmount);
router.get('/:privateToken/left/:n', reviewsLogic.getNthLeftReview);

router.post('/create', reviewsLogic.createReview);

export default router;
