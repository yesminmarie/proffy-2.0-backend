import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from 'typeorm';

export default class AddUserIdToClasses1602450526934
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.addColumn(
            'classes',
            new TableColumn({
                name: 'user_id',
                type: 'uuid',
            }),
        );

        await queryRunner.createForeignKey(
            'classes',
            new TableForeignKey({
                name: 'ClassesUser',
                columnNames: ['user_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('classes', 'ClassesUser');

        await queryRunner.dropColumn('classes', 'user_id');
    }
}
