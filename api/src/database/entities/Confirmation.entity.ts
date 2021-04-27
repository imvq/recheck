import { Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne } from 'typeorm';

import User from './User.entity';

/**
 * Confirmation code model.
 * We store confirmation codes separately so they don't litter the User table.
 * after being used.
 */
@Entity({ name: 'confirmations' })
export default class Confirmation {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @OneToOne(type => User, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: User = new User();
}
