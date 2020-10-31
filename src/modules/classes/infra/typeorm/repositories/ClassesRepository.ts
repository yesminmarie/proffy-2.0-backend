import { getRepository, Repository } from 'typeorm';

import IClassesRepository from '@modules/classes/repositories/IClassesRepository';
import ICreateClassDTO from '@modules/classes/dtos/ICreateClassDTO';
import Class from '@modules/classes/infra/typeorm/entities/Class';

class ClassesRepository implements IClassesRepository {
    private ormRepository: Repository<Class>;

    constructor() {
        this.ormRepository = getRepository(Class);
    }

    public async create({
        user_id,
        subject,
        cost,
    }: ICreateClassDTO): Promise<Class> {
        const classData = this.ormRepository.create({
            user_id,
            subject,
            cost,
        });

        await this.ormRepository.save(classData);

        return classData;
    }
}

export default ClassesRepository;
