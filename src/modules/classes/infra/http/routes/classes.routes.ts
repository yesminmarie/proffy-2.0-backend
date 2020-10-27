import { Router } from 'express';
import CreateClassService from '@modules/classes/services/CreateClassService';

const classesRouter = Router();

classesRouter.post('/', async (request, response) => {
    const { user_id, subject, cost } = request.body;

    const createClassService = new CreateClassService();

    const schedule = await createClassService.execute({
        user_id,
        subject,
        cost,
    });

    return response.json(schedule);
});

export default classesRouter;
