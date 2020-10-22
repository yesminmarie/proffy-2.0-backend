import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import SchedulesRepository from '../repositories/SchedulesRepository';
import CreateSchedulesService from '../services/CreateScheduleService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const schedulesRouter = Router();

schedulesRouter.use(ensureAuthenticated);

schedulesRouter.get('/', async (request, response) => {
    const schedulesRepository = getCustomRepository(SchedulesRepository);
    const listSchedules = await schedulesRepository.find();

    return response.json(listSchedules);
});

schedulesRouter.post('/', async (request, response) => {
    try {
        const { class_id, week_day, from, to } = request.body;

        const createSchedulesService = new CreateSchedulesService();

        const schedule = await createSchedulesService.execute({
            class_id,
            week_day,
            from,
            to,
        });

        return response.json(schedule);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default schedulesRouter;
