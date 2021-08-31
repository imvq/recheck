import { MigrationInterface, QueryRunner } from 'typeorm';

export class DateProvidedForReview1630442378281 implements MigrationInterface {
  name = 'DateProvidedForReview1630442378281'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "reviews" ADD "date" date NOT NULL DEFAULT CURRENT_TIMESTAMP');
    await queryRunner.query('CREATE INDEX "IDX_485c9ad56c42479f2bb2b20060" ON "reviews" ("date") ');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP INDEX "IDX_485c9ad56c42479f2bb2b20060"');
    await queryRunner.query('ALTER TABLE "reviews" DROP COLUMN "date"');
  }
}
