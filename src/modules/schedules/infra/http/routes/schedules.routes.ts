import { Router } from 'express';
import { container } from 'tsyringe';

import CreateSchedulesService from '@modules/schedules/services/CreateScheduleService';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const schedulesRouter = Router();

schedulesRouter.use(ensureAuthenticated);

// schedulesRouter.get('/', async (request, response) => {

//     const listSchedules = await schedulesRepository.find();

//     return response.json(listSchedules);
// });

schedulesRouter.post('/', async (request, response) => {
    const { class_id, week_day, from, to } = request.body;

    const createSchedulesService = container.resolve(CreateSchedulesService);

    const schedule = await createSchedulesService.execute({
        class_id,
        week_day,
        from,
        to,
    });

    return response.json(schedule);
});

export default schedulesRouter;
