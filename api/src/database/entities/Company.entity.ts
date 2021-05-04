import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

/**
 * Company model.
 */
@Entity({ name: 'companies' })
export default class Company {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column('text', { nullable: false })
  name: string = '';

  @Column('text', { nullable: false })
  site: string = '';

  @Column('text')
  logoUrl: string = '';
}
