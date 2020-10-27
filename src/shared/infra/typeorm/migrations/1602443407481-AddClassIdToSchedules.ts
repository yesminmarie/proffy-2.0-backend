import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from 'typeorm';

export default class AddClassIdToSchedules1602443407481
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.addColumn(
            'schedules',
            new TableColumn({
                name: 'class_id',
                type: 'uuid',
            }),
        );

        await queryRunner.createForeignKey(
            'schedules',
            new TableForeignKey({
                name: 'SchedulesClass',
                columnNames: ['class_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'classes',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('schedules', 'SchedulesClass');

        await queryRunner.dropColumn('schedules', 'class_id');
    }
}
