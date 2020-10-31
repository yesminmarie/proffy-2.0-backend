import Class from '@modules/classes/infra/typeorm/entities/Class';
import IClassesRepository from '@modules/classes/repositories/IClassesRepository';
import { injectable, inject } from 'tsyringe';

interface IRequest {
    user_id: string;
    subject: string;
    cost: number;
}

@injectable()
class CreateClassService {
    constructor(
        @inject('ClassesRepository')
        private classesRepository: IClassesRepository,
    ) {}

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
