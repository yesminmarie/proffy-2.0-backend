import { getCustomRepository } from 'typeorm';
import Schedule from '@modules/classes/infra/typeorm/entities/Schedule';
import SchedulesRepository from '../repositories/SchedulesRepository';

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

        const schedule = await schedulesRepository.create({
            class_id,
            week_day,
            from,
            to,
        });

        return schedule;
    }
}

export default CreateScheduleService;
