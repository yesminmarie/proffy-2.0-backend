import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateSchedulesService from '@modules/schedules/services/CreateScheduleService';

export default class SchedulesController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { class_id, week_day, from, to } = request.body;

        const createSchedulesService = container.resolve(
            CreateSchedulesService,
        );

        const schedule = await createSchedulesService.execute({
            class_id,
            week_day,
            from,
            to,
        });

        return response.json(schedule);
    }
}
