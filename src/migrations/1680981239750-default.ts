import { MigrationInterface, QueryRunner } from 'typeorm';

export class Default1680981239750 implements MigrationInterface {
  name = 'Default1680981239750';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "avatar"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "avatar" character varying NOT NULL`,
    );
  }
}
