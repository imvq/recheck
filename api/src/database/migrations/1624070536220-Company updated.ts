import { MigrationInterface, QueryRunner } from 'typeorm';

export class CompanyUpdated1624070536220 implements MigrationInterface {
  name = 'CompanyUpdated1624070536220'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "companies" DROP COLUMN "site"');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "companies" ADD "site" text NOT NULL');
  }
}
