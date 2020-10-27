import { EntityRepository, Repository } from 'typeorm';
import Schedule from '@modules/classes/infra/typeorm/entities/Schedule';

@EntityRepository(Schedule)
class SchedulesRepository extends Repository<Schedule> {
    // public findByDate(date: Date): Schedule | null {
    //     const scheduleSameDate = this.schedules.find(schedule =>
    //         isEqual(date, schedule.date),
    //     );
    //     return scheduleSameDate || null;
    // }
}

export default SchedulesRepository;