import { Router } from 'express';
import ClassesRepository from '@modules/classes/infra/typeorm/repositories/ClassesRepository';
import CreateClassService from '@modules/classes/services/CreateClassService';

const classesRouter = Router();

classesRouter.post('/', async (request, response) => {
    const classesRepository = new ClassesRepository();
    const { user_id, subject, cost } = request.body;

    const createClassService = new CreateClassService(classesRepository);

    const schedule = await createClassService.execute({
        user_id,
        subject,
        cost,
    });

    return response.json(schedule);
});

export default classesRouter;
