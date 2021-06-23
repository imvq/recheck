import { MigrationInterface, QueryRunner } from 'typeorm';

export class AvailableUsersUpdated1624449791938 implements MigrationInterface {
  name = 'AvailableUsersUpdated1624449791938';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "users_available_users_users" RENAME TO "available_users";');
    await queryRunner.query('ALTER TABLE "available_users" RENAME COLUMN "usersProfileId_1" to "ownerId"');
    await queryRunner.query('ALTER TABLE "available_users" RENAME COLUMN "usersProfileId_2" to "targetId"');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "available_users" RENAME COLUMN "ownerId" to "usersProfileId_1"');
    await queryRunner.query('ALTER TABLE "available_users" RENAME COLUMN "targetId" to "usersProfileId_2"');
    await queryRunner.query('ALTER TABLE "available_users" RENAME TO "users_available_users_users";');
  }
}
