import { MigrationInterface, QueryRunner } from 'typeorm';

export class WorkplaceMadeNonNullable1620247198865 implements MigrationInterface {
    name = 'WorkplaceMadeNonNullable1620247198865'

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('ALTER TABLE "reviews" ALTER COLUMN "workplace" SET NOT NULL');
      await queryRunner.query('COMMENT ON COLUMN "reviews"."workplace" IS NULL');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('COMMENT ON COLUMN "reviews"."workplace" IS NULL');
      await queryRunner.query('ALTER TABLE "reviews" ALTER COLUMN "workplace" DROP NOT NULL');
    }
}
