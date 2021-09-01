import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserRecruiterRemoved1630493428104 implements MigrationInterface {
  name = 'UserRecruiterRemoved1630493428104'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "users" DROP COLUMN "recruiter"');
    await queryRunner.query('COMMENT ON COLUMN "reviews"."date" IS NULL');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('COMMENT ON COLUMN "reviews"."date" IS NULL');
    await queryRunner.query('ALTER TABLE "users" ADD "recruiter" uuid');
  }
}
