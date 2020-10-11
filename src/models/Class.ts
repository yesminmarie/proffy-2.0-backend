import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('classes')
class Class {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    subject: string;

    @Column('decimal')
    cost: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Class;
