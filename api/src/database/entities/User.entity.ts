import { Entity, PrimaryColumn, Column, Index } from 'typeorm';

/**
 * User model.
 */
@Entity({ name: 'users' })
export default class User {
  @Index({ unique: true })
  @PrimaryColumn('varchar', { length: 30, nullable: false })
  profileId: string = '';

  @Column('int', { nullable: false })
  reviewsAvailable: number = 0;

  @Column({ type: 'timestamptz' })
  lastUpdatedAt: Date = new Date();
}
