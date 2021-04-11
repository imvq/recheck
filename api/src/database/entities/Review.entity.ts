import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';

import User from './User.entity';
import Workplace from './Workplace.entity';

/**
 * Review model.
 */
@Entity({ name: 'reviews' })
export default class Review {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @OneToOne(_ => User, { nullable: false }) @JoinColumn()
  author: User = new User();

  @Column('varchar', { length: 30, nullable: true })
  targetId: string = '';

  @Column('text', { nullable: true })
  workplace: string = '';

  @Column('text', { nullable: false })
  bounds: string = '';

  @Column('text', { nullable: false })
  tasks: string = '';

  @Column('text', { nullable: false })
  strengths: string = '';

  @Column('text', { nullable: false })
  improvements: string = '';

  @Column('text', { nullable: false })
  results: string = '';

  @Column('int', { nullable: false })
  levelMark: number = 0;

  @Column('text', { nullable: false })
  levelComment: string = '';

  @Column('int', { nullable: false })
  activityMark: number = 0;

  @Column('text', { nullable: false })
  activityComment: string = '';

  @Column('int', { nullable: false })
  ownHireOpinionMark: number = 0;

  @Column('text', { nullable: false })
  ownHireOpinionComment: string = '';

  @Column('int', { nullable: false })
  qualityMark: number = 0;

  @Column('text', { nullable: false })
  qualityComment: string = '';

  @Column('int', { nullable: false })
  leadershipMark: number = 0;

  @Column('text', { nullable: false })
  leadershipComment: string = '';

  @Column('text', { nullable: false })
  adviceComment: string = '';

  @Column('text', { nullable: false })
  recommenderLink1: string = '';

  @Column('text', { nullable: false })
  recommenderLink2: string = '';

  @Column('text', { nullable: false })
  recommenderLink3: string = '';

  /**
   * In progress: 0
   * Approved:    1
   * Rejected:   -1
   */
  @Column('int', { nullable: false })
  approved: number = 0;
}
