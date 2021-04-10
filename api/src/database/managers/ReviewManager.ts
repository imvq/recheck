import { getRepository, Repository } from 'typeorm';

import Dtos from '@dto';
import Types from '@types';
import Review from '../entities/Review.entity';
import UserManager from './UserManager';

/**
 * Class providing operations with Review entity.
 */
export default class ReviewManager {
  private static repo: Types.Nullable<Repository<Review>> = null;

  // Must be invoked after connection being established.
  public static loadRepository() {
    ReviewManager.repo = getRepository(Review);
  }

  public static createReview = async (reviewDto: Dtos.ReviewDto) => {
    const author = await UserManager.getUser(reviewDto.authorId);
    await ReviewManager.repo?.save(ReviewManager.repo.create({
      author,
      bounds: reviewDto.bounds,
      tasks: reviewDto.tasks,
      strengths: reviewDto.strengths,
      improvements: reviewDto.improvements,
      results: reviewDto.results,
      levelMark: parseInt(reviewDto.levelMark),
      levelComment: reviewDto.levelComment,
      activityMark: parseInt(reviewDto.activityMark),
      activityComment: reviewDto.activityComment,
      ownHireOpinionMark: parseInt(reviewDto.ownHireOpinionMark),
      ownHireOpinionComment: reviewDto.ownHireOpinionComment,
      qualityMark: parseInt(reviewDto.qualityMark),
      qualityComment: reviewDto.qualityComment,
      leadershipMark: parseInt(reviewDto.leadershipMark),
      leadershipComment: reviewDto.leadershipComment,
      adviceComment: reviewDto.adviceComment
    }));
  }
}