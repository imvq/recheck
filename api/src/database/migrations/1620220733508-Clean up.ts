import {MigrationInterface, QueryRunner} from "typeorm";

export class CleanUp1620220733508 implements MigrationInterface {
    name = 'CleanUp1620220733508'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "FK_15aa2171a9d537f151c0ab47c1a"`);
        await queryRunner.query(`COMMENT ON COLUMN "reviews"."approved" IS NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ALTER COLUMN "approved" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "reviews" ALTER COLUMN "authorProfileId" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "reviews"."authorProfileId" IS NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "FK_15aa2171a9d537f151c0ab47c1a" FOREIGN KEY ("authorProfileId") REFERENCES "users"("profileId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "FK_15aa2171a9d537f151c0ab47c1a"`);
        await queryRunner.query(`COMMENT ON COLUMN "reviews"."authorProfileId" IS NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ALTER COLUMN "authorProfileId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ALTER COLUMN "approved" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "reviews"."approved" IS NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "FK_15aa2171a9d537f151c0ab47c1a" FOREIGN KEY ("authorProfileId") REFERENCES "users"("profileId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
