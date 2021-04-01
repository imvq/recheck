import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserUpdated1617271042859 implements MigrationInterface {
  name = 'UserUpdated1617271042859'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "user" ADD "lastUpdatedAt" TIMESTAMP WITH TIME ZONE NOT NULL');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "user" DROP COLUMN "lastUpdatedAt"');
  }
}
