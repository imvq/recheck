import {MigrationInterface, QueryRunner} from "typeorm";

export class UserUpdated1620421098470 implements MigrationInterface {
    name = 'UserUpdated1620421098470'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "users"."reviewsAvailable" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "reviewsAvailable" SET DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "reviewsAvailable" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."reviewsAvailable" IS NULL`);
    }

}
