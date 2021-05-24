import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from 'typeorm';

import User from './User.entity';

/**
 * Review model.
 */
@Entity({ name: 'reviews' })
export default class Review {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => User, user => user.reviewsLeft)
  @JoinColumn()
  author!: User;

  @ManyToOne(() => User, user => user.reviewsGot, { nullable: true })
  @JoinColumn()
  target!: User;

  @Column('text')
  workplace!: string;

  @Column('text')
  bounds!: string;

  @Column('text')
  tasks!: string;

  @Column('text')
  strengths!: string;

  @Column('text')
  improvements!: string;

  @Column('text')
  results!: string;

  @Column('int')
  levelMark!: number;

  @Column('text')
  levelComment!: string;

  @Column('int')
  activityMark!: number;

  @Column('text')
  activityComment!: string;

  @Column('int')
  ownHireOpinionMark!: number;

  @Column('text')
  ownHireOpinionComment!: string;

  @Column('int')
  qualityMark!: number;

  @Column('text')
  qualityComment!: string;

  @Column('int')
  leadershipMark!: number;

  @Column('text')
  leadershipComment!: string;

  @Column('text')
  adviceComment!: string;

  @Column('text')
  recommenderLink1!: string;

  @Column('text')
  recommenderLink2!: string;

  @Column('text')
  recommenderLink3!: string;

  /**
   * In progress: 0
   * Approved:    1
   * Rejected:   -1
   */
  @Column('int', { default: 0 })
  approved!: 0 | 1 | -1;
}
