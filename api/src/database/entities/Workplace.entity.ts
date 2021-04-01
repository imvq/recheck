import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

/**
 * Workplace model.
 */
@Entity({ name: 'workplaces' })
export default class Workplace {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column('varchar', { length: 100, nullable: false })
  name: string = '';
}
