import { Entity, PrimaryColumn, Column, Index, OneToMany, ManyToOne } from 'typeorm';

import * as UtilityTypes from '@typing/utility';
import Company from './Company.entity';
import Review from './Review.entity';

/**
 * User model.
 */
@Entity({ name: 'users' })
export default class User {
  // Primary key.
  @Index({ unique: true })
  @PrimaryColumn('varchar', { length: 30 })
  profileId!: string;

  // Foreign key. Every user belongs to one company.
  @ManyToOne(() => Company, company => company.members)
  company!: Company;

  // Reviews left by the user.
  @OneToMany(() => Review, review => review.author)
  reviewsLeft!: Review[];

  // Reviews of the user.
  @OneToMany(() => Review, review => review.target)
  reviewsGot!: Review[];

  @Column('varchar', { length: 36, nullable: true })
  confirmationCode!: UtilityTypes.Nullable<string>;

  // Full name.
  @Column('text')
  name!: string;

  @Column('text')
  email!: string;

  @Column('text')
  photoUrl!: string;

  @Column('text')
  position!: string;

  // Since which month the user started its work. 0 is January.
  @Column('int')
  workStartMonth!: number;

  // Since which year the user started its work.
  @Column('int')
  workStartYear!: number;

  // How many users can be viewed by the user (excluding also viewed).
  @Column('int', { default: 0 })
  reviewsAvailable!: number;

  @Column({ type: 'timestamptz' })
  lastUpdatedAt!: Date;
}
