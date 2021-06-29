import { MigrationInterface, QueryRunner } from 'typeorm';

export class BasicEntitiesProvided1625000332087 implements MigrationInterface {
  name = 'BasicEntitiesProvided1625000332087'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE "reviews" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "targetPredefinedName" text NOT NULL, "workplace" text NOT NULL, "bounds" text NOT NULL, "tasks" text NOT NULL, "strengths" text NOT NULL, "improvements" text NOT NULL, "results" text NOT NULL, "levelMark" integer NOT NULL, "levelComment" text NOT NULL, "activityMark" integer NOT NULL, "activityComment" text NOT NULL, "ownHireOpinionMark" integer NOT NULL, "ownHireOpinionComment" text NOT NULL, "qualityMark" integer NOT NULL, "qualityComment" text NOT NULL, "leadershipMark" integer NOT NULL, "leadershipComment" text NOT NULL, "adviceComment" text NOT NULL, "recommenderLink1" text NOT NULL, "recommenderLink2" text NOT NULL, "recommenderLink3" text NOT NULL, "authorProfileId" character varying(30), "targetProfileId" character varying(30), CONSTRAINT "PK_231ae565c273ee700b283f15c1d" PRIMARY KEY ("id"))');
    await queryRunner.query('CREATE TABLE "users" ("profileId" character varying(30) NOT NULL, "confirmationCode" character varying(36), "name" text NOT NULL, "email" text NOT NULL, "photoUrl" text NOT NULL, "position" text NOT NULL, "workStartMonth" integer NOT NULL, "workStartYear" integer NOT NULL, "reviewsAvailable" integer NOT NULL DEFAULT \'0\', "companyId" integer, CONSTRAINT "PK_b1bda35cdb9a2c1b777f5541d87" PRIMARY KEY ("profileId"))');
    await queryRunner.query('CREATE UNIQUE INDEX "IDX_b1bda35cdb9a2c1b777f5541d8" ON "users" ("profileId") ');
    await queryRunner.query('CREATE INDEX "IDX_91cbb159b62fb144b1ab9e40e2" ON "users" ("confirmationCode") ');
    await queryRunner.query('CREATE INDEX "IDX_51b8b26ac168fbe7d6f5653e6c" ON "users" ("name") ');
    await queryRunner.query('CREATE UNIQUE INDEX "IDX_97672ac88f789774dd47f7c8be" ON "users" ("email") ');
    await queryRunner.query('CREATE TABLE "companies" ("id" SERIAL NOT NULL, "name" text NOT NULL, "logoUrl" text, CONSTRAINT "PK_d4bc3e82a314fa9e29f652c2c22" PRIMARY KEY ("id"))');
    await queryRunner.query('CREATE TABLE "users_available" ("ownerId" character varying(30) NOT NULL, "targetId" character varying(30) NOT NULL, CONSTRAINT "PK_3b29f8180e844d605fac2a84582" PRIMARY KEY ("ownerId", "targetId"))');
    await queryRunner.query('CREATE INDEX "IDX_f9892eedbe3d98b84dff4b3d6c" ON "users_available" ("ownerId") ');
    await queryRunner.query('CREATE INDEX "IDX_c4a3a2175d4b17d8122f9850a7" ON "users_available" ("targetId") ');
    await queryRunner.query('ALTER TABLE "reviews" ADD CONSTRAINT "FK_15aa2171a9d537f151c0ab47c1a" FOREIGN KEY ("authorProfileId") REFERENCES "users"("profileId") ON DELETE NO ACTION ON UPDATE NO ACTION');
    await queryRunner.query('ALTER TABLE "reviews" ADD CONSTRAINT "FK_ea2828398facd413d4340a2f09e" FOREIGN KEY ("targetProfileId") REFERENCES "users"("profileId") ON DELETE NO ACTION ON UPDATE NO ACTION');
    await queryRunner.query('ALTER TABLE "users" ADD CONSTRAINT "FK_6f9395c9037632a31107c8a9e58" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION');
    await queryRunner.query('ALTER TABLE "users_available" ADD CONSTRAINT "FK_f9892eedbe3d98b84dff4b3d6c9" FOREIGN KEY ("ownerId") REFERENCES "users"("profileId") ON DELETE CASCADE ON UPDATE NO ACTION');
    await queryRunner.query('ALTER TABLE "users_available" ADD CONSTRAINT "FK_c4a3a2175d4b17d8122f9850a7c" FOREIGN KEY ("targetId") REFERENCES "users"("profileId") ON DELETE CASCADE ON UPDATE NO ACTION');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "users_available" DROP CONSTRAINT "FK_c4a3a2175d4b17d8122f9850a7c"');
    await queryRunner.query('ALTER TABLE "users_available" DROP CONSTRAINT "FK_f9892eedbe3d98b84dff4b3d6c9"');
    await queryRunner.query('ALTER TABLE "users" DROP CONSTRAINT "FK_6f9395c9037632a31107c8a9e58"');
    await queryRunner.query('ALTER TABLE "reviews" DROP CONSTRAINT "FK_ea2828398facd413d4340a2f09e"');
    await queryRunner.query('ALTER TABLE "reviews" DROP CONSTRAINT "FK_15aa2171a9d537f151c0ab47c1a"');
    await queryRunner.query('DROP INDEX "IDX_c4a3a2175d4b17d8122f9850a7"');
    await queryRunner.query('DROP INDEX "IDX_f9892eedbe3d98b84dff4b3d6c"');
    await queryRunner.query('DROP TABLE "users_available"');
    await queryRunner.query('DROP TABLE "companies"');
    await queryRunner.query('DROP INDEX "IDX_97672ac88f789774dd47f7c8be"');
    await queryRunner.query('DROP INDEX "IDX_51b8b26ac168fbe7d6f5653e6c"');
    await queryRunner.query('DROP INDEX "IDX_91cbb159b62fb144b1ab9e40e2"');
    await queryRunner.query('DROP INDEX "IDX_b1bda35cdb9a2c1b777f5541d8"');
    await queryRunner.query('DROP TABLE "users"');
    await queryRunner.query('DROP TABLE "reviews"');
  }
}
