import { startOfHour } from 'date-fns';
import SchedulesRepository from '../repositories/SchedulesRepository';
import Schedule from '../models/Schedule';

interface Request {
    name: string;
    date: Date;
}
class CreateScheduleService {
    private schedulesRepository: SchedulesRepository;

    constructor(schedulesRepository: SchedulesRepository) {
        this.schedulesRepository = schedulesRepository;
    }

    public execute({ name, date }: Request): Schedule {
        const formatedDate = startOfHour(date);

        const scheduleSameDate = this.schedulesRepository.findByDate(
            formatedDate,
        );

        if (scheduleSameDate) {
            throw new Error('This schedule is already booked.');
        }

        const schedule = this.schedulesRepository.create({
            name,
            date: formatedDate,
        });

        return schedule;
    }
}

export default CreateScheduleService;
