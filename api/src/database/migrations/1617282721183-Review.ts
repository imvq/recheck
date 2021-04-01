import { MigrationInterface, QueryRunner } from 'typeorm';

export class Review1617282721183 implements MigrationInterface {
  name = 'Review1617282721183'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE "reviews" ("id" SERIAL NOT NULL, "question1" character varying(200) NOT NULL, "approved" integer NOT NULL, "authorProfileId" integer NOT NULL, "targetProfileId" integer NOT NULL, "workplaceId" integer NOT NULL, CONSTRAINT "REL_15aa2171a9d537f151c0ab47c1" UNIQUE ("authorProfileId"), CONSTRAINT "REL_ea2828398facd413d4340a2f09" UNIQUE ("targetProfileId"), CONSTRAINT "REL_99da0df8734fa4799859e446f6" UNIQUE ("workplaceId"), CONSTRAINT "PK_231ae565c273ee700b283f15c1d" PRIMARY KEY ("id"))');
    await queryRunner.query('ALTER TABLE "reviews" ADD CONSTRAINT "FK_15aa2171a9d537f151c0ab47c1a" FOREIGN KEY ("authorProfileId") REFERENCES "users"("profileId") ON DELETE NO ACTION ON UPDATE NO ACTION');
    await queryRunner.query('ALTER TABLE "reviews" ADD CONSTRAINT "FK_ea2828398facd413d4340a2f09e" FOREIGN KEY ("targetProfileId") REFERENCES "users"("profileId") ON DELETE NO ACTION ON UPDATE NO ACTION');
    await queryRunner.query('ALTER TABLE "reviews" ADD CONSTRAINT "FK_99da0df8734fa4799859e446f6d" FOREIGN KEY ("workplaceId") REFERENCES "workplaces"("id") ON DELETE NO ACTION ON UPDATE NO ACTION');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "reviews" DROP CONSTRAINT "FK_99da0df8734fa4799859e446f6d"');
    await queryRunner.query('ALTER TABLE "reviews" DROP CONSTRAINT "FK_ea2828398facd413d4340a2f09e"');
    await queryRunner.query('ALTER TABLE "reviews" DROP CONSTRAINT "FK_15aa2171a9d537f151c0ab47c1a"');
    await queryRunner.query('DROP TABLE "reviews"');
  }
}
