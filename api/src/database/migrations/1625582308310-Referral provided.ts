import { MigrationInterface, QueryRunner } from 'typeorm';

export class ReferralProvided1625582308310 implements MigrationInterface {
  name = 'ReferralProvided1625582308310'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "users" ADD "referral" text');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "users" DROP COLUMN "referral"');
  }
}
