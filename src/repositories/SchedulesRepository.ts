import { isEqual } from 'date-fns';
import Schedule from '../models/Schedule';

class SchedulesRepository {
    private schedules: Schedule[];

    constructor() {
        this.schedules = [];
    }

    public findByDate(date: Date): Schedule | null {
        const scheduleSameDate = this.schedules.find(schedule =>
            isEqual(date, schedule.date),
        );

        return scheduleSameDate || null;
    }

    public create(name: string, date: Date): Schedule {
        const schedule = new Schedule(name, date);

        this.schedules.push(schedule);

        return schedule;
    }
}

export default SchedulesRepository;
