import { MigrationInterface, QueryRunner } from 'typeorm';

export class ReviewUpdated1623528208731 implements MigrationInterface {
  name = 'ReviewUpdated1623528208731'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "reviews" DROP COLUMN "approved"');
    await queryRunner.query('COMMENT ON COLUMN "users"."lastUpdatedAt" IS NULL');
    await queryRunner.query('ALTER TABLE "users" ALTER COLUMN "lastUpdatedAt" SET DEFAULT \'NOW()\'');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "users" ALTER COLUMN "lastUpdatedAt" SET DEFAULT \'2021-06-07 20:43:02.457487+03\'');
    await queryRunner.query('COMMENT ON COLUMN "users"."lastUpdatedAt" IS NULL');
    await queryRunner.query('ALTER TABLE "reviews" ADD "approved" integer NOT NULL DEFAULT \'0\'');
  }
}
