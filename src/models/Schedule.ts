import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('schedules')
class Schedule {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('integer')
    week_day: number;

    @Column('integer')
    from: number;

    @Column('integer')
    to: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Schedule;
