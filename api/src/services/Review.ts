import { Errors } from 'typescript-rest';

import Dtos from '@dto';
import Logger from '@common/Logger';
import ReviewManager from '@database/managers/ReviewManager';

/**
 * Service in charge of reviews stuff.
 */
export default class ReviewService {
  public async createReview(reviewData: Dtos.ReviewDto)
    : Promise<void> {
    try {
      await ReviewManager.createReview(reviewData);
    } catch (error) {
      Logger.ifdev()?.err(error.message);
      Logger.ifdev()?.log('Test');
      throw new Errors.InternalServerError('Internal database error.');
    }
  }
}
