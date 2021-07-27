import * as orm from 'typeorm';

import NameToken from './NameToken.entity';
import Company from './Company.entity';
import Review from './Review.entity';

@orm.Entity({ name: 'users' })
export default class User {
  @orm.Index({ unique: true })
  @orm.PrimaryColumn('varchar', { length: 30 })
  profileId!: string;

  @orm.Index({ unique: true })
  @orm.Column()
  @orm.Generated('uuid')
  shareableId!: string;

  @orm.Column('text', { nullable: true })
  referral!: string | null;

  // Foreign key. Every user belongs to one company.
  @orm.ManyToOne(() => Company, company => company.members)
  company!: Company;

  @orm.ManyToMany(() => NameToken, nameToken => nameToken.bounds)
  nameTokens!: NameToken[];

  // Reviews left by the user.
  @orm.OneToMany(() => Review, review => review.author)
  reviewsLeft!: Review[];

  // Reviews of the user.
  @orm.OneToMany(() => Review, review => review.target)
  reviewsGot!: Review[];

  // Users reviews about whom are available to user.
  @orm.ManyToMany(() => User)
  @orm.JoinTable({
    name: 'users_available',
    joinColumn: {
      name: 'ownerId',
      referencedColumnName: 'profileId'
    },
    inverseJoinColumn: {
      name: 'targetId',
      referencedColumnName: 'profileId'
    }
  })
  availableUsers!: User[];

  // The filed is supposed to be generated manually.
  @orm.Column('varchar', { length: 36, nullable: true })
  @orm.Index()
  confirmationCode!: string | null;

  // Full name.
  @orm.Column('text')
  @orm.Index()
  name!: string;

  @orm.Column('text')
  @orm.Index({ unique: true })
  email!: string;

  @orm.Column('text')
  photoUrl!: string;

  @orm.Column('text')
  position!: string;

  // Since which month the user started its work. 0 is January.
  @orm.Column('int')
  workStartMonth!: number;

  // Since which year the user started its work.
  @orm.Column('int')
  workStartYear!: number;

  // How many users can be viewed by the user (excluding also viewed).
  @orm.Column('int', { default: 0 })
  reviewsAvailable!: number;
}
