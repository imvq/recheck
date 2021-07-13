import { MigrationInterface, QueryRunner } from 'typeorm';

export class ReviewSimplified1626155243750 implements MigrationInterface {
  name = 'ReviewSimplified1626155243750'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "reviews" DROP COLUMN "targetPredefinedName"');
    await queryRunner.query('ALTER TABLE "reviews" DROP COLUMN "workplace"');
    await queryRunner.query('ALTER TABLE "reviews" DROP COLUMN "bounds"');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "reviews" ADD "bounds" text NOT NULL');
    await queryRunner.query('ALTER TABLE "reviews" ADD "workplace" text NOT NULL');
    await queryRunner.query('ALTER TABLE "reviews" ADD "targetPredefinedName" text NOT NULL');
  }
}
