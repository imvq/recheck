import { getRepository, Repository } from 'typeorm';

import dto from '@dto';
import * as utilityTypes from '@typing/utility';
import Review from '../entities/Review.entity';
import UserManager from './UserManager';

/**
 * Class providing operations with Review entity.
 */
export default class ReviewManager {
  private static repo: utilityTypes.Nullable<Repository<Review>> = null;

  // Must be invoked after connection being established.
  public static loadRepository() {
    ReviewManager.repo = getRepository(Review);
  }

  public static async prepareReview(reviewDto: dto.CreateReviewDto)
    : Promise<void> {
    const author = await UserManager.getUser(reviewDto.authorId);
    const target = await UserManager.getUserBySharedId(reviewDto.targetShareableId);
    await ReviewManager.repo?.save(ReviewManager.repo.create({
      author,
      target,
      tasks: reviewDto.tasks,
      strengths: reviewDto.strengths,
      recommendation: reviewDto.recommendation,
      recommendationMark: reviewDto.recommendationMark
    }));
  }
}
