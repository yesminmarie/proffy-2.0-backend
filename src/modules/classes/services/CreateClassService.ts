import Class from '@modules/classes/infra/typeorm/entities/Class';
import IClassesRepository from '@modules/classes/repositories/IClassesRepository';

interface IRequest {
    user_id: string;
    subject: string;
    cost: number;
}

class CreateClassService {
    constructor(private classesRepository: IClassesRepository) {}

    public async execute({ user_id, subject, cost }: IRequest): Promise<Class> {
        const classData = await this.classesRepository.create({
            user_id,
            subject,
            cost,
        });

        return classData;
    }
}

export default CreateClassService;
