import { MigrationInterface, QueryRunner } from 'typeorm';

export class NameTokenProvided1626359650798 implements MigrationInterface {
  name = 'NameTokenProvided1626359650798';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE "name_tokens" ("id" SERIAL NOT NULL, "tokenValue" text NOT NULL, CONSTRAINT "PK_a07d969b34a6adc0fd534a8abf0" PRIMARY KEY ("id"))');
    await queryRunner.query('CREATE TABLE "name_tokens_bounds" ("nameTokensId" integer NOT NULL, "usersProfileId" character varying(30) NOT NULL, CONSTRAINT "PK_717ab95f8dc408e01f3a9db0d01" PRIMARY KEY ("nameTokensId", "usersProfileId"))');
    await queryRunner.query('CREATE INDEX "IDX_7a5e3deebc74aaafb42b026795" ON "name_tokens_bounds" ("nameTokensId") ');
    await queryRunner.query('CREATE INDEX "IDX_b9f418eabcbc3a582f6f8dfb29" ON "name_tokens_bounds" ("usersProfileId") ');
    await queryRunner.query('ALTER TABLE "name_tokens_bounds" ADD CONSTRAINT "FK_7a5e3deebc74aaafb42b026795b" FOREIGN KEY ("nameTokensId") REFERENCES "name_tokens"("id") ON DELETE CASCADE ON UPDATE NO ACTION');
    await queryRunner.query('ALTER TABLE "name_tokens_bounds" ADD CONSTRAINT "FK_b9f418eabcbc3a582f6f8dfb298" FOREIGN KEY ("usersProfileId") REFERENCES "users"("profileId") ON DELETE CASCADE ON UPDATE NO ACTION');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "name_tokens_bounds" DROP CONSTRAINT "FK_b9f418eabcbc3a582f6f8dfb298"');
    await queryRunner.query('ALTER TABLE "name_tokens_bounds" DROP CONSTRAINT "FK_7a5e3deebc74aaafb42b026795b"');
    await queryRunner.query('DROP INDEX "IDX_b9f418eabcbc3a582f6f8dfb29"');
    await queryRunner.query('DROP INDEX "IDX_7a5e3deebc74aaafb42b026795"');
    await queryRunner.query('DROP TABLE "name_tokens_bounds"');
    await queryRunner.query('DROP TABLE "name_tokens"');
  }
}
