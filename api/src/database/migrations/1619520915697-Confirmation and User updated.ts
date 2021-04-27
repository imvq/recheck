import {MigrationInterface, QueryRunner} from "typeorm";

export class ConfirmationAndUserUpdated1619520915697 implements MigrationInterface {
    name = 'ConfirmationAndUserUpdated1619520915697'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "confirmations" ("id" SERIAL NOT NULL, "code" integer NOT NULL, "userProfileId" character varying(30), CONSTRAINT "REL_c18ac0d99e93c368b5177387c1" UNIQUE ("userProfileId"), CONSTRAINT "PK_8a3991e9a203e6460dcb9048746" PRIMARY KEY ("id"))`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."reviewsAvailable" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "reviewsAvailable" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."lastUpdatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "lastUpdatedAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "confirmations" ADD CONSTRAINT "FK_c18ac0d99e93c368b5177387c1d" FOREIGN KEY ("userProfileId") REFERENCES "users"("profileId") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "confirmations" DROP CONSTRAINT "FK_c18ac0d99e93c368b5177387c1d"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "lastUpdatedAt" SET DEFAULT '2021-04-27 13:03:12.124025+03'`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."lastUpdatedAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "reviewsAvailable" SET DEFAULT '0'`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."reviewsAvailable" IS NULL`);
        await queryRunner.query(`DROP TABLE "confirmations"`);
    }

}
