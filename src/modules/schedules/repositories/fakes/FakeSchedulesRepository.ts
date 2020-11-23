import ISchedulesRepository from '@modules/schedules/repositories/ISchedulesRepository';
import ICreateScheduleDTO from '@modules/schedules/dtos/ICreateScheduleDTO';
import Schedule from '@modules/schedules/infra/typeorm/entities/Schedule';
import { v4 } from 'uuid';

class SchedulesRepository implements ISchedulesRepository {
    private schedules: Schedule[] = [];

    // public async findByDate(date: Date): Promise<Schedule | undefined> {
    //     const scheduleSameDate = this.schedules.find(
    //         schedule => schedule.date === date,
    //     );
    //     return scheduleSameDate;
    // }

    public async create({
        class_id,
        week_day,
        from,
        to,
    }: ICreateScheduleDTO): Promise<Schedule> {
        const scheduleData = new Schedule();

        Object.assign(scheduleData, { id: v4(), class_id, week_day, from, to });

        this.schedules.push(scheduleData);

        return scheduleData;
    }
}

export default SchedulesRepository;
