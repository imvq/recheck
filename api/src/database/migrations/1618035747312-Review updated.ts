import {MigrationInterface, QueryRunner} from "typeorm";

export class ReviewUpdated1618035747312 implements MigrationInterface {
    name = 'ReviewUpdated1618035747312'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "question1"`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "bounds" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "tasks" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "strengths" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "improvements" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "results" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "levelMark" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "levelComment" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "activityMark" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "activityComment" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "ownHireOpinionMark" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "ownHireOpinionComment" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "qualityMark" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "qualityComment" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "leadershipMark" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "leadershipComment" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "adviceComment" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "FK_ea2828398facd413d4340a2f09e"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "FK_99da0df8734fa4799859e446f6d"`);
        await queryRunner.query(`ALTER TABLE "reviews" ALTER COLUMN "targetProfileId" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "reviews"."targetProfileId" IS NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ALTER COLUMN "workplaceId" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "reviews"."workplaceId" IS NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "FK_ea2828398facd413d4340a2f09e" FOREIGN KEY ("targetProfileId") REFERENCES "users"("profileId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "FK_99da0df8734fa4799859e446f6d" FOREIGN KEY ("workplaceId") REFERENCES "workplaces"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "FK_99da0df8734fa4799859e446f6d"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "FK_ea2828398facd413d4340a2f09e"`);
        await queryRunner.query(`COMMENT ON COLUMN "reviews"."workplaceId" IS NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ALTER COLUMN "workplaceId" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "reviews"."targetProfileId" IS NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ALTER COLUMN "targetProfileId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "FK_99da0df8734fa4799859e446f6d" FOREIGN KEY ("workplaceId") REFERENCES "workplaces"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "FK_ea2828398facd413d4340a2f09e" FOREIGN KEY ("targetProfileId") REFERENCES "users"("profileId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "adviceComment"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "leadershipComment"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "leadershipMark"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "qualityComment"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "qualityMark"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "ownHireOpinionComment"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "ownHireOpinionMark"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "activityComment"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "activityMark"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "levelComment"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "levelMark"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "results"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "improvements"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "strengths"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "tasks"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "bounds"`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "question1" character varying(200) NOT NULL`);
    }

}
