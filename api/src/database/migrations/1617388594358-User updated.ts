import {MigrationInterface, QueryRunner} from "typeorm";

export class UserUpdated1617388594358 implements MigrationInterface {
    name = 'UserUpdated1617388594358'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "FK_15aa2171a9d537f151c0ab47c1a"`);
        await queryRunner.query(`ALTER TABLE "available_reviews" DROP CONSTRAINT "FK_6a125d38dbbadfbf0b703f71bb8"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "PK_b1bda35cdb9a2c1b777f5541d87"`);
        await queryRunner.query(`DROP INDEX "IDX_b1bda35cdb9a2c1b777f5541d8"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "profileId"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "profileId" character varying(30) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "PK_b1bda35cdb9a2c1b777f5541d87" PRIMARY KEY ("profileId")`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "REL_15aa2171a9d537f151c0ab47c1"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "authorProfileId"`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "authorProfileId" character varying(30) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "UQ_15aa2171a9d537f151c0ab47c1a" UNIQUE ("authorProfileId")`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "REL_ea2828398facd413d4340a2f09"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "targetProfileId"`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "targetProfileId" character varying(30) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "UQ_ea2828398facd413d4340a2f09e" UNIQUE ("targetProfileId")`);
        await queryRunner.query(`ALTER TABLE "available_reviews" DROP CONSTRAINT "REL_6a125d38dbbadfbf0b703f71bb"`);
        await queryRunner.query(`ALTER TABLE "available_reviews" DROP COLUMN "forUserProfileId"`);
        await queryRunner.query(`ALTER TABLE "available_reviews" ADD "forUserProfileId" character varying(30) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "available_reviews" ADD CONSTRAINT "UQ_6a125d38dbbadfbf0b703f71bb8" UNIQUE ("forUserProfileId")`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_b1bda35cdb9a2c1b777f5541d8" ON "users" ("profileId") `);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "FK_15aa2171a9d537f151c0ab47c1a" FOREIGN KEY ("authorProfileId") REFERENCES "users"("profileId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "FK_ea2828398facd413d4340a2f09e" FOREIGN KEY ("targetProfileId") REFERENCES "users"("profileId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "available_reviews" ADD CONSTRAINT "FK_6a125d38dbbadfbf0b703f71bb8" FOREIGN KEY ("forUserProfileId") REFERENCES "users"("profileId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "available_reviews" DROP CONSTRAINT "FK_6a125d38dbbadfbf0b703f71bb8"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "FK_ea2828398facd413d4340a2f09e"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "FK_15aa2171a9d537f151c0ab47c1a"`);
        await queryRunner.query(`DROP INDEX "IDX_b1bda35cdb9a2c1b777f5541d8"`);
        await queryRunner.query(`ALTER TABLE "available_reviews" DROP CONSTRAINT "UQ_6a125d38dbbadfbf0b703f71bb8"`);
        await queryRunner.query(`ALTER TABLE "available_reviews" DROP COLUMN "forUserProfileId"`);
        await queryRunner.query(`ALTER TABLE "available_reviews" ADD "forUserProfileId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "available_reviews" ADD CONSTRAINT "REL_6a125d38dbbadfbf0b703f71bb" UNIQUE ("forUserProfileId")`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "UQ_ea2828398facd413d4340a2f09e"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "targetProfileId"`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "targetProfileId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "REL_ea2828398facd413d4340a2f09" UNIQUE ("targetProfileId")`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "UQ_15aa2171a9d537f151c0ab47c1a"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "authorProfileId"`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "authorProfileId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "REL_15aa2171a9d537f151c0ab47c1" UNIQUE ("authorProfileId")`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "PK_b1bda35cdb9a2c1b777f5541d87"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "profileId"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "profileId" integer NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_b1bda35cdb9a2c1b777f5541d8" ON "users" ("profileId") `);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "PK_b1bda35cdb9a2c1b777f5541d87" PRIMARY KEY ("profileId")`);
        await queryRunner.query(`ALTER TABLE "available_reviews" ADD CONSTRAINT "FK_6a125d38dbbadfbf0b703f71bb8" FOREIGN KEY ("forUserProfileId") REFERENCES "users"("profileId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "FK_15aa2171a9d537f151c0ab47c1a" FOREIGN KEY ("authorProfileId") REFERENCES "users"("profileId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
