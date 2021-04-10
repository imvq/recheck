import { Path, POST } from 'typescript-rest';
import { Inject } from 'typescript-ioc';

import Dtos from '@dto';
import ReviewService from '@services/Review';

/**
 * Default controller in charge of checking the API.
 */
@Path('/review')
export default class ReviewController {
  public constructor(@Inject private readonly injectedService: ReviewService) {}

  /**
   * Save new review.
   */
  @Path('/create')
  @POST
  public async createReview(reviewDto: Dtos.ReviewDto): Promise<void> {
    return this.injectedService.createReview(reviewDto);
  }
}
