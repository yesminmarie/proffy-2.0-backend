import { Router } from 'express';
import { startOfHour, parseISO } from 'date-fns';
import SchedulesRepository from '../repositories/SchedulesRepository';

const schedulesRouter = Router();

const schedulesRepository = new SchedulesRepository();

schedulesRouter.post('/', (request, response) => {
    const { name, date } = request.body;

    const formatedDate = startOfHour(parseISO(date));

    const scheduleSameDate = schedulesRepository.findByDate(formatedDate);

    if (scheduleSameDate) {
        return response
            .status(400)
            .json({ message: 'This schedule is already booked.' });
    }

    const schedule = schedulesRepository.create(name, formatedDate);

    return response.json(schedule);
});

export default schedulesRouter;
