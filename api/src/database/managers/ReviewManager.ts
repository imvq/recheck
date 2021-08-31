import { getRepository } from 'typeorm';

import dto from '@dto';
import Review from '../entities/Review.entity';
import UserManager from './UserManager';

/**
 * Class providing operations with Review entity.
 */
export default class ReviewManager {
  public static async prepareReview(reviewDto: dto.CreateReviewDto)
    : Promise<void> {
    const author = await UserManager.getUser(reviewDto.authorId);
    const target = await UserManager.getUserBySharedId(reviewDto.targetShareableId);

    const repository = getRepository(Review);
    const toBeSaved = repository.create({
      author,
      target,
      tasks: reviewDto.tasks,
      strengths: reviewDto.strengths,
      recommendation: reviewDto.recommendation,
      recommendationMark: reviewDto.recommendationMark
    });

    await repository.save(toBeSaved);
  }

  public static async doesReviewExists(authorId: string, targetShareableId: string) {
    return await getRepository(Review)
      .createQueryBuilder('reviews')
      .innerJoin('reviews.author', 'author')
      .innerJoin('reviews.target', 'target')
      .where('author.profileId = :authorId', { authorId })
      .andWhere('target.shareableId = :targetShareableId', { targetShareableId })
      .getCount() > 0;
  }
}
