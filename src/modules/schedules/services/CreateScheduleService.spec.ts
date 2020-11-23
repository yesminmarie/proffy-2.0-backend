import FakeSchedulesRepository from '../repositories/fakes/FakeSchedulesRepository';
import CreateScheduleService from './CreateScheduleService';

describe('CreateSchedule', () => {
    it('should be able to create a new schedule', async () => {
        const fakeSchedulesRepository = new FakeSchedulesRepository();
        const createSchedule = new CreateScheduleService(
            fakeSchedulesRepository,
        );

        const scheduleData = await createSchedule.execute({
            class_id: '12345',
            week_day: 3,
            from: 8,
            to: 12,
        });

        expect(scheduleData).toHaveProperty('id');
        expect(scheduleData.class_id).toBe('12345');
    });
});
