import { Router } from 'express';
import CreateClassService from '../services/CreateClassService';

const classesRouter = Router();

classesRouter.post('/', async (request, response) => {
    try {
        const { user_id, subject, cost } = request.body;

        const createClassService = new CreateClassService();

        const schedule = await createClassService.execute({
            user_id,
            subject,
            cost,
        });

        return response.json(schedule);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default classesRouter;
