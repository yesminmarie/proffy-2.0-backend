import { getRepository } from 'typeorm';
import Class from '@modules/classes/infra/typeorm/entities/Class';

interface IRequest {
    user_id: string;
    subject: string;
    cost: number;
}

class CreateClassService {
    public async execute({ user_id, subject, cost }: IRequest): Promise<Class> {
        const classRepository = getRepository(Class);

        const classData = classRepository.create({
            user_id,
            subject,
            cost,
        });

        await classRepository.save(classData);

        return classData;
    }
}

export default CreateClassService;
