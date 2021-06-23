import { MigrationInterface, QueryRunner } from 'typeorm';

export class RedundantTablesRemoved1624447294655 implements MigrationInterface {
  name = 'RedundantTablesRemoved1624447294655';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE available_reviews;');
    await queryRunner.query('DROP TABLE confirmations;');
    await queryRunner.query('DROP TABLE workplaces;');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE "available_reviews" ();');
    await queryRunner.query('CREATE TABLE "confirmations" ();');
    await queryRunner.query('CREATE TABLE "workplaces";');
  }
}
