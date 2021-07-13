import { MigrationInterface, QueryRunner } from 'typeorm';

export class ReviewSimplified1626186123037 implements MigrationInterface {
  name = 'ReviewSimplified1626186123037'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "reviews" DROP COLUMN "improvements"');
    await queryRunner.query('ALTER TABLE "reviews" DROP COLUMN "results"');
    await queryRunner.query('ALTER TABLE "reviews" DROP COLUMN "levelMark"');
    await queryRunner.query('ALTER TABLE "reviews" DROP COLUMN "levelComment"');
    await queryRunner.query('ALTER TABLE "reviews" DROP COLUMN "activityMark"');
    await queryRunner.query('ALTER TABLE "reviews" DROP COLUMN "activityComment"');
    await queryRunner.query('ALTER TABLE "reviews" DROP COLUMN "ownHireOpinionMark"');
    await queryRunner.query('ALTER TABLE "reviews" DROP COLUMN "ownHireOpinionComment"');
    await queryRunner.query('ALTER TABLE "reviews" DROP COLUMN "qualityMark"');
    await queryRunner.query('ALTER TABLE "reviews" DROP COLUMN "qualityComment"');
    await queryRunner.query('ALTER TABLE "reviews" DROP COLUMN "leadershipMark"');
    await queryRunner.query('ALTER TABLE "reviews" DROP COLUMN "leadershipComment"');
    await queryRunner.query('ALTER TABLE "reviews" DROP COLUMN "adviceComment"');
    await queryRunner.query('ALTER TABLE "reviews" DROP COLUMN "recommenderLink1"');
    await queryRunner.query('ALTER TABLE "reviews" DROP COLUMN "recommenderLink2"');
    await queryRunner.query('ALTER TABLE "reviews" DROP COLUMN "recommenderLink3"');
    await queryRunner.query('ALTER TABLE "reviews" ADD "recommendation" text NOT NULL');
    await queryRunner.query('ALTER TABLE "reviews" ADD "recommendationMark" integer NOT NULL');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "reviews" DROP COLUMN "recommendationMark"');
    await queryRunner.query('ALTER TABLE "reviews" DROP COLUMN "recommendation"');
    await queryRunner.query('ALTER TABLE "reviews" ADD "recommenderLink3" text NOT NULL');
    await queryRunner.query('ALTER TABLE "reviews" ADD "recommenderLink2" text NOT NULL');
    await queryRunner.query('ALTER TABLE "reviews" ADD "recommenderLink1" text NOT NULL');
    await queryRunner.query('ALTER TABLE "reviews" ADD "adviceComment" text NOT NULL');
    await queryRunner.query('ALTER TABLE "reviews" ADD "leadershipComment" text NOT NULL');
    await queryRunner.query('ALTER TABLE "reviews" ADD "leadershipMark" integer NOT NULL');
    await queryRunner.query('ALTER TABLE "reviews" ADD "qualityComment" text NOT NULL');
    await queryRunner.query('ALTER TABLE "reviews" ADD "qualityMark" integer NOT NULL');
    await queryRunner.query('ALTER TABLE "reviews" ADD "ownHireOpinionComment" text NOT NULL');
    await queryRunner.query('ALTER TABLE "reviews" ADD "ownHireOpinionMark" integer NOT NULL');
    await queryRunner.query('ALTER TABLE "reviews" ADD "activityComment" text NOT NULL');
    await queryRunner.query('ALTER TABLE "reviews" ADD "activityMark" integer NOT NULL');
    await queryRunner.query('ALTER TABLE "reviews" ADD "levelComment" text NOT NULL');
    await queryRunner.query('ALTER TABLE "reviews" ADD "levelMark" integer NOT NULL');
    await queryRunner.query('ALTER TABLE "reviews" ADD "results" text NOT NULL');
    await queryRunner.query('ALTER TABLE "reviews" ADD "improvements" text NOT NULL');
  }
}
