import {
  Entity,
  PrimaryColumn,
  Column,
  Index
} from 'typeorm';

/**
 * User model.
 */
@Entity({ name: 'user' })
export default class User {
  @Index({ unique: true })
  @PrimaryColumn('int', { nullable: false })
  profileId: number = 0;

  @Index({ unique: true })
  @Column('varchar', { length: 30, nullable: false })
  linkedIn: string = '';

  @Column('int', { nullable: false })
  reviewsAvailable: number = 0;

  @Column({ type: 'timestamptz' })
  lastUpdatedAt: Date = new Date();
}
