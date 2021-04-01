import { MigrationInterface, QueryRunner } from 'typeorm';

export class AvailableReview1617283133080 implements MigrationInterface {
  name = 'AvailableReview1617283133080'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE "available_reviews" ("id" SERIAL NOT NULL, "forUserProfileId" integer NOT NULL, "reviewId" integer NOT NULL, CONSTRAINT "REL_6a125d38dbbadfbf0b703f71bb" UNIQUE ("forUserProfileId"), CONSTRAINT "REL_d0688fc1eec5a0697a8eb62704" UNIQUE ("reviewId"), CONSTRAINT "PK_2ba826131379ac9d48e2f5a87b6" PRIMARY KEY ("id"))');
    await queryRunner.query('ALTER TABLE "available_reviews" ADD CONSTRAINT "FK_6a125d38dbbadfbf0b703f71bb8" FOREIGN KEY ("forUserProfileId") REFERENCES "users"("profileId") ON DELETE NO ACTION ON UPDATE NO ACTION');
    await queryRunner.query('ALTER TABLE "available_reviews" ADD CONSTRAINT "FK_d0688fc1eec5a0697a8eb627044" FOREIGN KEY ("reviewId") REFERENCES "reviews"("id") ON DELETE NO ACTION ON UPDATE NO ACTION');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "available_reviews" DROP CONSTRAINT "FK_d0688fc1eec5a0697a8eb627044"');
    await queryRunner.query('ALTER TABLE "available_reviews" DROP CONSTRAINT "FK_6a125d38dbbadfbf0b703f71bb8"');
    await queryRunner.query('DROP TABLE "available_reviews"');
  }
}
