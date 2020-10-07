import { Router } from 'express';
import { parseISO } from 'date-fns';
import SchedulesRepository from '../repositories/SchedulesRepository';
import CreateSchedulesService from '../services/CreateScheduleService';

const schedulesRouter = Router();

const schedulesRepository = new SchedulesRepository();

schedulesRouter.get('/', (request, response) => {
    const listSchedules = schedulesRepository.all();

    return response.json(listSchedules);
});

schedulesRouter.post('/', (request, response) => {
    try {
        const { name, date } = request.body;

        const convertedDate = parseISO(date);

        const createSchedulesService = new CreateSchedulesService(
            schedulesRepository,
        );

        const schedule = createSchedulesService.execute({
            name,
            date: convertedDate,
        });

        return response.json(schedule);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default schedulesRouter;
