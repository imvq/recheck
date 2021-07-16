import { MigrationInterface, QueryRunner } from 'typeorm';

export class IndexForNameTokensValueProvided1626468145538 implements MigrationInterface {
  name = 'IndexForNameTokensValueProvided1626468145538';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "name_tokens_bounds" DROP CONSTRAINT "FK_7a5e3deebc74aaafb42b026795b"');
    await queryRunner.query('ALTER TABLE "name_tokens_bounds" DROP CONSTRAINT "FK_b9f418eabcbc3a582f6f8dfb298"');
    await queryRunner.query('DROP INDEX "IDX_7a5e3deebc74aaafb42b026795"');
    await queryRunner.query('DROP INDEX "IDX_b9f418eabcbc3a582f6f8dfb29"');
    await queryRunner.query('CREATE UNIQUE INDEX "IDX_d9e0c5522caa7a2face0bd4fe2" ON "name_tokens" ("tokenValue") ');
    await queryRunner.query('CREATE INDEX "IDX_82bfd934a8ea94f78759fd4cd9" ON "name_tokens_bounds" ("nameTokensId") ');
    await queryRunner.query('CREATE INDEX "IDX_a1e62d25c689ca702b264d5eb6" ON "name_tokens_bounds" ("usersProfileId") ');
    await queryRunner.query('ALTER TABLE "name_tokens_bounds" ADD CONSTRAINT "FK_82bfd934a8ea94f78759fd4cd98" FOREIGN KEY ("nameTokensId") REFERENCES "name_tokens"("id") ON DELETE CASCADE ON UPDATE NO ACTION');
    await queryRunner.query('ALTER TABLE "name_tokens_bounds" ADD CONSTRAINT "FK_a1e62d25c689ca702b264d5eb63" FOREIGN KEY ("usersProfileId") REFERENCES "users"("profileId") ON DELETE CASCADE ON UPDATE NO ACTION');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "name_tokens_bounds" DROP CONSTRAINT "FK_a1e62d25c689ca702b264d5eb63"');
    await queryRunner.query('ALTER TABLE "name_tokens_bounds" DROP CONSTRAINT "FK_82bfd934a8ea94f78759fd4cd98"');
    await queryRunner.query('DROP INDEX "IDX_a1e62d25c689ca702b264d5eb6"');
    await queryRunner.query('DROP INDEX "IDX_82bfd934a8ea94f78759fd4cd9"');
    await queryRunner.query('DROP INDEX "IDX_d9e0c5522caa7a2face0bd4fe2"');
    await queryRunner.query('CREATE INDEX "IDX_b9f418eabcbc3a582f6f8dfb29" ON "name_tokens_bounds" ("usersProfileId") ');
    await queryRunner.query('CREATE INDEX "IDX_7a5e3deebc74aaafb42b026795" ON "name_tokens_bounds" ("nameTokensId") ');
    await queryRunner.query('ALTER TABLE "name_tokens_bounds" ADD CONSTRAINT "FK_b9f418eabcbc3a582f6f8dfb298" FOREIGN KEY ("usersProfileId") REFERENCES "users"("profileId") ON DELETE CASCADE ON UPDATE NO ACTION');
    await queryRunner.query('ALTER TABLE "name_tokens_bounds" ADD CONSTRAINT "FK_7a5e3deebc74aaafb42b026795b" FOREIGN KEY ("nameTokensId") REFERENCES "name_tokens"("id") ON DELETE CASCADE ON UPDATE NO ACTION');
  }
}
