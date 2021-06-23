import { MigrationInterface, QueryRunner } from 'typeorm';

export class Company1620147468420 implements MigrationInterface {
  name = 'Company1620147468420'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE "companies" ("id" SERIAL NOT NULL, "name" text NOT NULL, "site" text NOT NULL, "logoUrl" text NOT NULL, CONSTRAINT "PK_d4bc3e82a314fa9e29f652c2c22" PRIMARY KEY ("id"))');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "companies"');
  }
}
