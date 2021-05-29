import { MigrationInterface, QueryRunner } from 'typeorm';

export class ReviewUpdated1622300385373 implements MigrationInterface {
  name = 'ReviewUpdated1622300385373'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "reviews" ADD "targetPredefinedName" text NOT NULL');
    await queryRunner.query('COMMENT ON COLUMN "users"."lastUpdatedAt" IS NULL');
    await queryRunner.query('ALTER TABLE "users" ALTER COLUMN "lastUpdatedAt" SET DEFAULT \'NOW()\'');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "users" ALTER COLUMN "lastUpdatedAt" SET DEFAULT \'2021-05-29 16:51:43.498735+03\'');
    await queryRunner.query('COMMENT ON COLUMN "users"."lastUpdatedAt" IS NULL');
    await queryRunner.query('ALTER TABLE "reviews" DROP COLUMN "targetPredefinedName"');
  }
}
