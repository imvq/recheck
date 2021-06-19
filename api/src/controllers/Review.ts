import { Path, POST } from 'typescript-rest';
import { Inject } from 'typescript-ioc';
import BodyGuard from 'typescript-rest-body-guard';

import dto from '@dto';
import ReviewService from '@services/Review';
import * as apiResponses from '@typing/apiResponses';

/**
 * Default controller in charge of reviews.
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
  public async prepareReview(reviewDto: dto.CreateReviewDto)
    : Promise<apiResponses.IPrepareReviewResponseDto> {
    return this.injectedService.prepareReview(reviewDto);
  }

  /**
   * Specify review's target.
   */
  @Path('/bind-target')
  @BodyGuard
  @POST
  public async bindReviewTarget(targetDto: dto.BindReviewTargetDto)
    : Promise<apiResponses.IBindReviewTargetResponseDto> {
    return this.injectedService.bindReviewTarget(targetDto);
  }
}
