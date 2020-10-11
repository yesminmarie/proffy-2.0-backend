import { getCustomRepository } from 'typeorm';
import SchedulesRepository from '../repositories/SchedulesRepository';
import Schedule from '../models/Schedule';

interface IRequest {
    class_id: string;
    week_day: number;
    from: number;
    to: number;
}
class CreateScheduleService {
    public async execute({
        class_id,
        week_day,
        from,
        to,
    }: IRequest): Promise<Schedule> {
        const schedulesRepository = getCustomRepository(SchedulesRepository);

        const schedule = schedulesRepository.create({
            class_id,
            week_day,
            from,
            to,
        });

        await schedulesRepository.save(schedule);

        return schedule;
    }
}

export default CreateScheduleService;
