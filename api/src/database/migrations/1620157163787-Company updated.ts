import { MigrationInterface, QueryRunner } from 'typeorm';

export class CompanyUpdated1620157163787 implements MigrationInterface {
  name = 'CompanyUpdated1620157163787'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "companies" ALTER COLUMN "logoUrl" DROP NOT NULL');
    await queryRunner.query('COMMENT ON COLUMN "companies"."logoUrl" IS NULL');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('COMMENT ON COLUMN "companies"."logoUrl" IS NULL');
    await queryRunner.query('ALTER TABLE "companies" ALTER COLUMN "logoUrl" SET NOT NULL');
  }
}
