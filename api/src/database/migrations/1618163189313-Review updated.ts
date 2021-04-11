import {MigrationInterface, QueryRunner} from "typeorm";

export class ReviewUpdated1618163189313 implements MigrationInterface {
    name = 'ReviewUpdated1618163189313'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reviews" ADD "recommenderLink1" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "recommenderLink2" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "recommenderLink3" text NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."lastUpdatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "lastUpdatedAt" SET DEFAULT 'NOW()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "lastUpdatedAt" SET DEFAULT '2021-04-11 17:40:26.545375+03'`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."lastUpdatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "recommenderLink3"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "recommenderLink2"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "recommenderLink1"`);
    }

}
