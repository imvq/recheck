import { MigrationInterface, QueryRunner } from 'typeorm';

export class BasicEntitiesProvided1619527355146 implements MigrationInterface {
  name = 'BasicEntitiesProvided1619527355146'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE "users" ("profileId" character varying(30) NOT NULL, "name" text NOT NULL, "email" text NOT NULL, "photoUrl" text NOT NULL, "reviewsAvailable" integer NOT NULL, "lastUpdatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_b1bda35cdb9a2c1b777f5541d87" PRIMARY KEY ("profileId"))');
    await queryRunner.query('CREATE UNIQUE INDEX "IDX_b1bda35cdb9a2c1b777f5541d8" ON "users" ("profileId") ');
    await queryRunner.query('CREATE TABLE "reviews" ("id" SERIAL NOT NULL, "targetId" character varying(30), "workplace" text, "bounds" text NOT NULL, "tasks" text NOT NULL, "strengths" text NOT NULL, "improvements" text NOT NULL, "results" text NOT NULL, "levelMark" integer NOT NULL, "levelComment" text NOT NULL, "activityMark" integer NOT NULL, "activityComment" text NOT NULL, "ownHireOpinionMark" integer NOT NULL, "ownHireOpinionComment" text NOT NULL, "qualityMark" integer NOT NULL, "qualityComment" text NOT NULL, "leadershipMark" integer NOT NULL, "leadershipComment" text NOT NULL, "adviceComment" text NOT NULL, "recommenderLink1" text NOT NULL, "recommenderLink2" text NOT NULL, "recommenderLink3" text NOT NULL, "approved" integer NOT NULL, "authorProfileId" character varying(30) NOT NULL, CONSTRAINT "REL_15aa2171a9d537f151c0ab47c1" UNIQUE ("authorProfileId"), CONSTRAINT "PK_231ae565c273ee700b283f15c1d" PRIMARY KEY ("id"))');
    await queryRunner.query('CREATE TABLE "available_reviews" ("id" SERIAL NOT NULL, "forUserProfileId" character varying(30) NOT NULL, "reviewId" integer NOT NULL, CONSTRAINT "REL_6a125d38dbbadfbf0b703f71bb" UNIQUE ("forUserProfileId"), CONSTRAINT "REL_d0688fc1eec5a0697a8eb62704" UNIQUE ("reviewId"), CONSTRAINT "PK_2ba826131379ac9d48e2f5a87b6" PRIMARY KEY ("id"))');
    await queryRunner.query('CREATE TABLE "confirmations" ("id" SERIAL NOT NULL, "code" integer NOT NULL, "userProfileId" character varying(30), CONSTRAINT "REL_c18ac0d99e93c368b5177387c1" UNIQUE ("userProfileId"), CONSTRAINT "PK_8a3991e9a203e6460dcb9048746" PRIMARY KEY ("id"))');
    await queryRunner.query('CREATE TABLE "workplaces" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, CONSTRAINT "PK_f872f818cf4097e56927a852375" PRIMARY KEY ("id"))');
    await queryRunner.query('ALTER TABLE "reviews" ADD CONSTRAINT "FK_15aa2171a9d537f151c0ab47c1a" FOREIGN KEY ("authorProfileId") REFERENCES "users"("profileId") ON DELETE NO ACTION ON UPDATE NO ACTION');
    await queryRunner.query('ALTER TABLE "available_reviews" ADD CONSTRAINT "FK_6a125d38dbbadfbf0b703f71bb8" FOREIGN KEY ("forUserProfileId") REFERENCES "users"("profileId") ON DELETE NO ACTION ON UPDATE NO ACTION');
    await queryRunner.query('ALTER TABLE "available_reviews" ADD CONSTRAINT "FK_d0688fc1eec5a0697a8eb627044" FOREIGN KEY ("reviewId") REFERENCES "reviews"("id") ON DELETE NO ACTION ON UPDATE NO ACTION');
    await queryRunner.query('ALTER TABLE "confirmations" ADD CONSTRAINT "FK_c18ac0d99e93c368b5177387c1d" FOREIGN KEY ("userProfileId") REFERENCES "users"("profileId") ON DELETE CASCADE ON UPDATE NO ACTION');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "confirmations" DROP CONSTRAINT "FK_c18ac0d99e93c368b5177387c1d"');
    await queryRunner.query('ALTER TABLE "available_reviews" DROP CONSTRAINT "FK_d0688fc1eec5a0697a8eb627044"');
    await queryRunner.query('ALTER TABLE "available_reviews" DROP CONSTRAINT "FK_6a125d38dbbadfbf0b703f71bb8"');
    await queryRunner.query('ALTER TABLE "reviews" DROP CONSTRAINT "FK_15aa2171a9d537f151c0ab47c1a"');
    await queryRunner.query('DROP TABLE "workplaces"');
    await queryRunner.query('DROP TABLE "confirmations"');
    await queryRunner.query('DROP TABLE "available_reviews"');
    await queryRunner.query('DROP TABLE "reviews"');
    await queryRunner.query('DROP INDEX "IDX_b1bda35cdb9a2c1b777f5541d8"');
    await queryRunner.query('DROP TABLE "users"');
  }
}
