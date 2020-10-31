import { getRepository, Repository } from 'typeorm';

import ISchedulesRepository from '@modules/schedules/repositories/ISchedulesRepository';
import ICreateScheduleDTO from '@modules/schedules/dtos/ICreateScheduleDTO';
import Schedule from '@modules/schedules/infra/typeorm/entities/Schedule';

class SchedulesRepository implements ISchedulesRepository {
    private ormRepository: Repository<Schedule>;

    constructor() {
        this.ormRepository = getRepository(Schedule);
    }

    public async findByDate(date: Date): Promise<Schedule | undefined> {
        const scheduleSameDate = await this.ormRepository.findOne({
            where: { date },
        });

        return scheduleSameDate;
    }

    public async create({
        class_id,
        week_day,
        from,
        to,
    }: ICreateScheduleDTO): Promise<Schedule> {
        const schedule = this.ormRepository.create({
            class_id,
            week_day,
            from,
            to,
        });

        await this.ormRepository.save(schedule);

        return schedule;
    }
}

export default SchedulesRepository;
