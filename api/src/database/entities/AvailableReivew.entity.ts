import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

import User from './User.entity';
import Review from './Review.entity';

/**
 * Available review model.
 */
@Entity({ name: 'available_reviews' })
export default class AvailableReview {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @OneToOne(_ => User, { nullable: false }) @JoinColumn()
  forUser: User = new User();

  @OneToOne(_ => Review, { nullable: false }) @JoinColumn()
  review: Review = new Review();
}
