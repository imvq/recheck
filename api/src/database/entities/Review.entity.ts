import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn
} from 'typeorm';

import User from './User.entity';

/**
 * Review model.
 */
@Entity({ name: 'reviews' })
export default class Review {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @OneToOne(_ => User) @JoinColumn()
  author: User = new User();

  @OneToOne(_ => User) @JoinColumn()
  target: User = new User();

  @Column('varchar', { length: 200, nullable: false })
  question1: string = '';
}
