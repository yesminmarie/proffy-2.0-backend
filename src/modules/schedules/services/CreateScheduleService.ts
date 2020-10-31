import Schedule from '@modules/schedules/infra/typeorm/entities/Schedule';
import ISchedulesRepository from '@modules/schedules/repositories/ISchedulesRepository';
import { injectable, inject } from 'tsyringe';

interface IRequest {
    class_id: string;
    week_day: number;
    from: number;
    to: number;
}

@injectable()
class CreateScheduleService {
    constructor(
        @inject('SchedulesRepository')
        private schedulesRepository: ISchedulesRepository,
    ) {}

    public async execute({
        class_id,
        week_day,
        from,
        to,
    }: IRequest): Promise<Schedule> {
        const schedule = await this.schedulesRepository.create({
            class_id,
            week_day,
            from,
            to,
        });

        return schedule;
    }
}

export default CreateScheduleService;
