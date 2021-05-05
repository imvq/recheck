import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from 'typeorm';

import User from './User.entity';

/**
 * Confirmation code model.
 * We store confirmation codes separately so they don't litter the User table.
 * after being used.
 */
@Entity({ name: 'confirmations' })
export default class Confirmation {
  // Primary key.
  @PrimaryGeneratedColumn()
  id!: number;

  // Foreign key. Each user can have only one confiramtion code at the same moment.
  @OneToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn()
  user!: User;

  @Column('int')
  code!: number;
}
