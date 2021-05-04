import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import Types from '@types';
import User from './User.entity';

/**
 * Company model.
 */
@Entity({ name: 'companies' })
export default class Company {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('text')
  name!: string;

  @Column('text')
  site!: string;

  @Column('text', { nullable: true })
  logoUrl!: Types.Nullable<string>;

  @OneToMany(() => User, user => user.company)
  members!: User[];
}
