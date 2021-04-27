import {MigrationInterface, QueryRunner} from "typeorm";

export class UserUpdated1619528301042 implements MigrationInterface {
    name = 'UserUpdated1619528301042'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "companySite" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "companyName" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "position" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "workStartMonth" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "workStartYear" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "workStartYear"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "workStartMonth"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "position"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "companyName"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "companySite"`);
    }

}
