import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from 'typeorm';

import User from './User.entity';

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
  tasks!: string;

  @Column('text')
  strengths!: string;

  @Column('text')
  recommendation!: string;

  @Column('int')
  recommendationMark!: number;
}
