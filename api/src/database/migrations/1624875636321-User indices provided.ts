import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserIndicesProvided1624875636321 implements MigrationInterface {
  name = 'UserIndicesProvided1624875636321'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE INDEX "IDX_91cbb159b62fb144b1ab9e40e2" ON "users" ("confirmationCode") ');
    await queryRunner.query('CREATE INDEX "IDX_51b8b26ac168fbe7d6f5653e6c" ON "users" ("name") ');
    await queryRunner.query('CREATE UNIQUE INDEX "IDX_97672ac88f789774dd47f7c8be" ON "users" ("email") ');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP INDEX "IDX_97672ac88f789774dd47f7c8be"');
    await queryRunner.query('DROP INDEX "IDX_51b8b26ac168fbe7d6f5653e6c"');
    await queryRunner.query('DROP INDEX "IDX_91cbb159b62fb144b1ab9e40e2"');
  }
}
