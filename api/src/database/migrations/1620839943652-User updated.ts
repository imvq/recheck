import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserUpdated1620839943652 implements MigrationInterface {
  name = 'UserUpdated1620839943652'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('COMMENT ON COLUMN "users"."lastUpdatedAt" IS NULL');
    await queryRunner.query('ALTER TABLE "users" ALTER COLUMN "lastUpdatedAt" SET DEFAULT \'NOW()\'');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "users" ALTER COLUMN "lastUpdatedAt" DROP DEFAULT');
    await queryRunner.query('COMMENT ON COLUMN "users"."lastUpdatedAt" IS NULL');
  }
}
