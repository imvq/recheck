import { Errors } from 'typescript-rest';

import Dtos from '@dto';
import Types from '@types';
import Logger from '@common/Logger';
import ReviewManager from '@database/managers/ReviewManager';

/**
 * Service in charge of reviews stuff.
 */
export default class ReviewService {
  public async prepareReview(reviewData: Dtos.CreateReviewDto)
    : Promise<Types.PrepareReviewDto> {
    try {
      await ReviewManager.prepareReview(reviewData);
      return { success: true };
    } catch (error) {
      Logger.ifdev()?.err(error.message);
      throw new Errors.InternalServerError('Internal database error.');
    }
  }

  public async bindReviewTarget(targetData: Dtos.BindReviewTargetDto)
    : Promise<Types.BindReviewTargetResponseDto> {
    try {
      await ReviewManager.bindReviewTarget(targetData);
      return { success: true };
    } catch (error) {
      Logger.ifdev()?.err(error.message);
      throw new Errors.InternalServerError('Internal database error.');
    }
  }
}
