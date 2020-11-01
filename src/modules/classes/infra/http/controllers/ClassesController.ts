import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateClassService from '@modules/classes/services/CreateClassService';

export default class ClassesController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { user_id, subject, cost } = request.body;

        const createClassService = container.resolve(CreateClassService);

        const schedule = await createClassService.execute({
            user_id,
            subject,
            cost,
        });

        return response.json(schedule);
    }
}
