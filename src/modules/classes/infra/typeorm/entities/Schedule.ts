import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

import Class from './Class';

@Entity('schedules')
class Schedule {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    class_id: string;

    @ManyToOne(() => Class)
    @JoinColumn({ name: 'class_id' })
    class: Class;

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
