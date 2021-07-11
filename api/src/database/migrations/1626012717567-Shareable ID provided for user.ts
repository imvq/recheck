import { MigrationInterface, QueryRunner } from 'typeorm';

export class ShareableIDProvidedForUser1626012717567 implements MigrationInterface {
  name = 'ShareableIDProvidedForUser1626012717567'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "users" ADD "shareableId" uuid NOT NULL DEFAULT uuid_generate_v4()');
    await queryRunner.query('CREATE UNIQUE INDEX "IDX_6c76d2a5706d923d7e7605078d" ON "users" ("shareableId") ');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP INDEX "IDX_6c76d2a5706d923d7e7605078d"');
    await queryRunner.query('ALTER TABLE "users" DROP COLUMN "shareableId"');
  }
}
