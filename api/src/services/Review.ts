import { Errors } from 'typescript-rest';

import * as apiResponses from '@typing/apiResponses';

import dto from '@dto';
import logger from '@logging/Logger';
import utils from '@utils';

import ReviewManager from '@database/managers/ReviewManager';
import UserManager from '@database/managers/UserManager';

import UserService from './User';

/**
 * Service in charge of reviews stuff.
 */
export default class ReviewService {
  @utils.errorsAutoHandler({ except: [Errors.NotFoundError], logger })
  public async prepareReview(reviewData: dto.CreateReviewDto)
    : Promise<apiResponses.IPrepareReviewResponseDto> {
    const author = await UserManager.getUser(reviewData.authorId);
    UserService.handleUsersExistence(author);

    // @ts-ignore: author is guaranteed to be existed here.
    UserManager.addAvailableReviews(author);

    await ReviewManager.prepareReview(reviewData);

    return { success: true };
  }
}
