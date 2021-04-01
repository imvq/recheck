import { MigrationInterface, QueryRunner } from 'typeorm';

export class Workplace1617282571440 implements MigrationInterface {
  name = 'Workplace1617282571440'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE "users" ("profileId" integer NOT NULL, "linkedIn" character varying(30) NOT NULL, "reviewsAvailable" integer NOT NULL, "lastUpdatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_b1bda35cdb9a2c1b777f5541d87" PRIMARY KEY ("profileId"))');
    await queryRunner.query('CREATE UNIQUE INDEX "IDX_b1bda35cdb9a2c1b777f5541d8" ON "users" ("profileId") ');
    await queryRunner.query('CREATE UNIQUE INDEX "IDX_a4acdfb6874f3ff6ee8c4b0d5d" ON "users" ("linkedIn") ');
    await queryRunner.query('CREATE TABLE "workplaces" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, CONSTRAINT "PK_f872f818cf4097e56927a852375" PRIMARY KEY ("id"))');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "workplaces"');
    await queryRunner.query('DROP INDEX "IDX_a4acdfb6874f3ff6ee8c4b0d5d"');
    await queryRunner.query('DROP INDEX "IDX_b1bda35cdb9a2c1b777f5541d8"');
    await queryRunner.query('DROP TABLE "users"');
  }
}
