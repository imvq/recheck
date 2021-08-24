import {MigrationInterface, QueryRunner} from "typeorm";

export class UserUpdated1629813428747 implements MigrationInterface {
    name = 'UserUpdated1629813428747'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_available" DROP CONSTRAINT "FK_f9892eedbe3d98b84dff4b3d6c9"`);
        await queryRunner.query(`ALTER TABLE "users_available" DROP CONSTRAINT "FK_c4a3a2175d4b17d8122f9850a7c"`);
        await queryRunner.query(`DROP INDEX "IDX_f9892eedbe3d98b84dff4b3d6c"`);
        await queryRunner.query(`DROP INDEX "IDX_c4a3a2175d4b17d8122f9850a7"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "recruiter" uuid`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "referral"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "referral" uuid`);
        await queryRunner.query(`CREATE INDEX "IDX_0e6d0c9cf1b647f2cba0ad1177" ON "users_available" ("ownerId") `);
        await queryRunner.query(`CREATE INDEX "IDX_dedc4724734805a76289ebf3be" ON "users_available" ("targetId") `);
        await queryRunner.query(`ALTER TABLE "users_available" ADD CONSTRAINT "FK_0e6d0c9cf1b647f2cba0ad11778" FOREIGN KEY ("ownerId") REFERENCES "users"("profileId") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_available" ADD CONSTRAINT "FK_dedc4724734805a76289ebf3bef" FOREIGN KEY ("targetId") REFERENCES "users"("profileId") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_available" DROP CONSTRAINT "FK_dedc4724734805a76289ebf3bef"`);
        await queryRunner.query(`ALTER TABLE "users_available" DROP CONSTRAINT "FK_0e6d0c9cf1b647f2cba0ad11778"`);
        await queryRunner.query(`DROP INDEX "IDX_dedc4724734805a76289ebf3be"`);
        await queryRunner.query(`DROP INDEX "IDX_0e6d0c9cf1b647f2cba0ad1177"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "referral"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "referral" text`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "recruiter"`);
        await queryRunner.query(`CREATE INDEX "IDX_c4a3a2175d4b17d8122f9850a7" ON "users_available" ("targetId") `);
        await queryRunner.query(`CREATE INDEX "IDX_f9892eedbe3d98b84dff4b3d6c" ON "users_available" ("ownerId") `);
        await queryRunner.query(`ALTER TABLE "users_available" ADD CONSTRAINT "FK_c4a3a2175d4b17d8122f9850a7c" FOREIGN KEY ("targetId") REFERENCES "users"("profileId") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_available" ADD CONSTRAINT "FK_f9892eedbe3d98b84dff4b3d6c9" FOREIGN KEY ("ownerId") REFERENCES "users"("profileId") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
