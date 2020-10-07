import { v4 } from 'uuid';

class Schedule {
    id: string;

    name: string;

    date: Date;

    constructor({ name, date }: Omit<Schedule, 'id'>) {
        this.id = v4();
        this.name = name;
        this.date = date;
    }
}

export default Schedule;
