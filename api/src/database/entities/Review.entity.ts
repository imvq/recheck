import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn
} from 'typeorm';

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

  @OneToOne(_ => User, { nullable: false }) @JoinColumn()
  target: User = new User();

  @OneToOne(_ => Workplace, { nullable: false }) @JoinColumn()
  workplace: Workplace = new Workplace();

  @Column('varchar', { length: 200, nullable: false })
  question1: string = '';

  /**
   * In progress: 0
   * Approved:    1
   * Rejected:   -1
   */
  @Column('int', { nullable: false })
  approved: number = 0;
}
