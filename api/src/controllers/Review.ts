import { Path, POST } from 'typescript-rest';
import { Inject } from 'typescript-ioc';
import BodyGuard from 'typescript-rest-body-guard';

import Dtos from '@dto';
import ReviewService from '@services/Review';
import Types from '@types';

/**
 * Default controller in charge of checking the API.
 */
@Path('/review')
export default class ReviewController {
  public constructor(@Inject private readonly injectedService: ReviewService) {}

  /**
   * Save new review.
   * Created review won't have a target. The target is specified later
   * after the target user approve the review.
   */
  @Path('/prepare')
  @BodyGuard
  @POST
  public async prepareReview(reviewDto: Dtos.CreateReviewDto)
    : Promise<Types.PrepareReviewResponseDto> {
    return this.injectedService.prepareReview(reviewDto);
  }

  /**
   * Specify review's target.
   */
  @Path('/bind-target')
  @BodyGuard
  @POST
  public async bindReviewTarget(targetDto: Dtos.BindReviewTargetDto)
    : Promise<Types.BindReviewTargetResponseDto> {
    return this.injectedService.bindReviewTarget(targetDto);
  }
}
