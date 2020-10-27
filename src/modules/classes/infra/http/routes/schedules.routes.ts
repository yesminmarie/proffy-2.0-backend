import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import SchedulesRepository from '@modules/classes/repositories/SchedulesRepository';
import CreateSchedulesService from '@modules/classes/services/CreateScheduleService';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const schedulesRouter = Router();

schedulesRouter.use(ensureAuthenticated);

schedulesRouter.get('/', async (request, response) => {
    const schedulesRepository = getCustomRepository(SchedulesRepository);
    const listSchedules = await schedulesRepository.find();

    return response.json(listSchedules);
});

schedulesRouter.post('/', async (request, response) => {
    const { class_id, week_day, from, to } = request.body;

    const createSchedulesService = new CreateSchedulesService();

    const schedule = await createSchedulesService.execute({
        class_id,
        week_day,
        from,
        to,
    });

    return response.json(schedule);
});

export default schedulesRouter;
