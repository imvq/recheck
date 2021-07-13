import { Errors } from 'typescript-rest';

import dto from '@dto';
import logger from '@logging/Logger';
import * as apiResponses from '@typing/apiResponses';
import ReviewManager from '@database/managers/ReviewManager';

/**
 * Service in charge of reviews stuff.
 */
export default class ReviewService {
  public async prepareReview(reviewData: dto.CreateReviewDto)
    : Promise<apiResponses.IPrepareReviewResponseDto> {
    try {
      await ReviewManager.prepareReview(reviewData);
      return { success: true };
    } catch (error) {
      logger.err(error.message);
      throw new Errors.InternalServerError('Internal database error.');
    }
  }
}
