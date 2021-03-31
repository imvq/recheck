import { MigrationInterface, QueryRunner } from 'typeorm';

export class User1617227804713 implements MigrationInterface {
  name = 'User1617227804713'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE "user" ("profileId" integer NOT NULL, "linkedIn" character varying(30) NOT NULL, "reviewsAvailable" integer NOT NULL, CONSTRAINT "PK_9466682df91534dd95e4dbaa616" PRIMARY KEY ("profileId"))');
    await queryRunner.query('CREATE UNIQUE INDEX "IDX_9466682df91534dd95e4dbaa61" ON "user" ("profileId") ');
    await queryRunner.query('CREATE UNIQUE INDEX "IDX_864f8294103d7e2a80f029a2d0" ON "user" ("linkedIn") ');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP INDEX "IDX_864f8294103d7e2a80f029a2d0"');
    await queryRunner.query('DROP INDEX "IDX_9466682df91534dd95e4dbaa61"');
    await queryRunner.query('DROP TABLE "user"');
  }
}
