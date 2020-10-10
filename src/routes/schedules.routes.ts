import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import SchedulesRepository from '../repositories/SchedulesRepository';
import CreateSchedulesService from '../services/CreateScheduleService';

const schedulesRouter = Router();

schedulesRouter.get('/', (request, response) => {
    const schedulesRepository = getCustomRepository(SchedulesRepository);
    const listSchedules = schedulesRepository.find();

    return response.json(listSchedules);
});

schedulesRouter.post('/', async (request, response) => {
    try {
        const { week_day, from, to } = request.body;

        const createSchedulesService = new CreateSchedulesService();

        const schedule = await createSchedulesService.execute({
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
