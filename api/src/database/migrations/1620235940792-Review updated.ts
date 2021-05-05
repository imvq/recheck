import {MigrationInterface, QueryRunner} from "typeorm";

export class ReviewUpdated1620235940792 implements MigrationInterface {
    name = 'ReviewUpdated1620235940792'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "available_reviews" DROP CONSTRAINT "FK_d0688fc1eec5a0697a8eb627044"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "PK_231ae565c273ee700b283f15c1d"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "PK_231ae565c273ee700b283f15c1d" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "available_reviews" DROP CONSTRAINT "REL_d0688fc1eec5a0697a8eb62704"`);
        await queryRunner.query(`ALTER TABLE "available_reviews" DROP COLUMN "reviewId"`);
        await queryRunner.query(`ALTER TABLE "available_reviews" ADD "reviewId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "available_reviews" ADD CONSTRAINT "UQ_d0688fc1eec5a0697a8eb627044" UNIQUE ("reviewId")`);
        await queryRunner.query(`ALTER TABLE "available_reviews" ADD CONSTRAINT "FK_d0688fc1eec5a0697a8eb627044" FOREIGN KEY ("reviewId") REFERENCES "reviews"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "available_reviews" DROP CONSTRAINT "FK_d0688fc1eec5a0697a8eb627044"`);
        await queryRunner.query(`ALTER TABLE "available_reviews" DROP CONSTRAINT "UQ_d0688fc1eec5a0697a8eb627044"`);
        await queryRunner.query(`ALTER TABLE "available_reviews" DROP COLUMN "reviewId"`);
        await queryRunner.query(`ALTER TABLE "available_reviews" ADD "reviewId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "available_reviews" ADD CONSTRAINT "REL_d0688fc1eec5a0697a8eb62704" UNIQUE ("reviewId")`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "PK_231ae565c273ee700b283f15c1d"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "PK_231ae565c273ee700b283f15c1d" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "available_reviews" ADD CONSTRAINT "FK_d0688fc1eec5a0697a8eb627044" FOREIGN KEY ("reviewId") REFERENCES "reviews"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
