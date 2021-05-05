import {MigrationInterface, QueryRunner} from "typeorm";

export class ReviewsUpdated1620232095184 implements MigrationInterface {
    name = 'ReviewsUpdated1620232095184'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "targetId"`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "targetProfileId" character varying(30)`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "FK_15aa2171a9d537f151c0ab47c1a"`);
        await queryRunner.query(`COMMENT ON COLUMN "reviews"."authorProfileId" IS NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "REL_15aa2171a9d537f151c0ab47c1"`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "FK_15aa2171a9d537f151c0ab47c1a" FOREIGN KEY ("authorProfileId") REFERENCES "users"("profileId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "FK_ea2828398facd413d4340a2f09e" FOREIGN KEY ("targetProfileId") REFERENCES "users"("profileId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "FK_ea2828398facd413d4340a2f09e"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "FK_15aa2171a9d537f151c0ab47c1a"`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "REL_15aa2171a9d537f151c0ab47c1" UNIQUE ("authorProfileId")`);
        await queryRunner.query(`COMMENT ON COLUMN "reviews"."authorProfileId" IS NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "FK_15aa2171a9d537f151c0ab47c1a" FOREIGN KEY ("authorProfileId") REFERENCES "users"("profileId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "targetProfileId"`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "targetId" character varying(30)`);
    }

}
