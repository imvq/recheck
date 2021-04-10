import { Entity, PrimaryColumn, Column, Index } from 'typeorm';

/**
 * User model.
 */
@Entity({ name: 'users' })
export default class User {
  @Index({ unique: true })
  @PrimaryColumn('varchar', { length: 30, nullable: false })
  profileId: string = '';

  @Column('int', { nullable: false, default: 0 })
  reviewsAvailable: number = 0;

  @Column({ type: 'timestamptz', default: 'NOW()' })
  lastUpdatedAt: Date = new Date();
}
