import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import User from './User.entity';

@Entity({ name: 'companies' })
export default class Company {
  // Primary key. Auto-generated.
  @PrimaryGeneratedColumn()
  id!: number;

  // Foreign key. A company can have many members.
  @OneToMany(() => User, user => user.company, { onDelete: 'NO ACTION' })
  members!: User[];

  @Column('text')
  name!: string;

  @Column('text', { nullable: true })
  logoUrl!: string | null;
}
