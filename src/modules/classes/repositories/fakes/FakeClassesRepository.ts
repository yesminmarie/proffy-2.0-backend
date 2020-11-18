import { v4 } from 'uuid';

import IClassesRepository from '@modules/classes/repositories/IClassesRepository';
import ICreateClassDTO from '@modules/classes/dtos/ICreateClassDTO';
import Class from '@modules/classes/infra/typeorm/entities/Class';

class ClassesRepository implements IClassesRepository {
    private classes: Class[] = [];

    public async create({
        user_id,
        subject,
        cost,
    }: ICreateClassDTO): Promise<Class> {
        const classesData = new Class();

        Object.assign(classesData, { id: v4(), user_id, subject, cost });

        this.classes.push(classesData);

        return classesData;
    }
}

export default ClassesRepository;
