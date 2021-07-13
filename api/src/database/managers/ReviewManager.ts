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
    await ReviewManager.repo?.save(ReviewManager.repo.create({
      author,
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
      adviceComment: reviewDto.adviceComment,
      recommenderLink1: reviewDto.recommenderLink1,
      recommenderLink2: reviewDto.recommenderLink2,
      recommenderLink3: reviewDto.recommenderLink3
    }));
  }

  public static async bindReviewTarget(targetDto: dto.BindReviewTargetDto)
    : Promise<void> {
    const target = await UserManager.getUser(targetDto.profileId);
    const review = await ReviewManager.repo?.findOne(targetDto.reviewId);
    await ReviewManager.repo?.save({ id: review?.id, target });
  }
}
