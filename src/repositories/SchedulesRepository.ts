import { isEqual } from 'date-fns';
import Schedule from '../models/Schedule';

interface SchedulesDTO {
    name: string;
    date: Date;
}

class SchedulesRepository {
    private schedules: Schedule[];

    constructor() {
        this.schedules = [];
    }

    public all(): Schedule[] {
        return this.schedules;
    }

    public findByDate(date: Date): Schedule | null {
        const scheduleSameDate = this.schedules.find(schedule =>
            isEqual(date, schedule.date),
        );

        return scheduleSameDate || null;
    }

    public create({ name, date }: SchedulesDTO): Schedule {
        const schedule = new Schedule({ name, date });

        this.schedules.push(schedule);

        return schedule;
    }
}

export default SchedulesRepository;
