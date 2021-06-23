import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserUpdated1624446773594 implements MigrationInterface {
  name = 'UserUpdated1624446773594'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE "users_available_users_users" ("usersProfileId_1" character varying(30) NOT NULL, "usersProfileId_2" character varying(30) NOT NULL, CONSTRAINT "PK_3b29f8180e844d605fac2a84582" PRIMARY KEY ("usersProfileId_1", "usersProfileId_2"))');
    await queryRunner.query('CREATE INDEX "IDX_f9892eedbe3d98b84dff4b3d6c" ON "users_available_users_users" ("usersProfileId_1") ');
    await queryRunner.query('CREATE INDEX "IDX_c4a3a2175d4b17d8122f9850a7" ON "users_available_users_users" ("usersProfileId_2") ');
    await queryRunner.query('ALTER TABLE "users" DROP COLUMN "lastUpdatedAt"');
    await queryRunner.query('ALTER TABLE "users_available_users_users" ADD CONSTRAINT "FK_f9892eedbe3d98b84dff4b3d6c9" FOREIGN KEY ("usersProfileId_1") REFERENCES "users"("profileId") ON DELETE CASCADE ON UPDATE NO ACTION');
    await queryRunner.query('ALTER TABLE "users_available_users_users" ADD CONSTRAINT "FK_c4a3a2175d4b17d8122f9850a7c" FOREIGN KEY ("usersProfileId_2") REFERENCES "users"("profileId") ON DELETE CASCADE ON UPDATE NO ACTION');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "users_available_users_users" DROP CONSTRAINT "FK_c4a3a2175d4b17d8122f9850a7c"');
    await queryRunner.query('ALTER TABLE "users_available_users_users" DROP CONSTRAINT "FK_f9892eedbe3d98b84dff4b3d6c9"');
    await queryRunner.query('ALTER TABLE "users" ADD "lastUpdatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP');
    await queryRunner.query('DROP INDEX "IDX_c4a3a2175d4b17d8122f9850a7"');
    await queryRunner.query('DROP INDEX "IDX_f9892eedbe3d98b84dff4b3d6c"');
    await queryRunner.query('DROP TABLE "users_available_users_users"');
  }
}
