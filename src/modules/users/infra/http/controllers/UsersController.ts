import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';

export default class UsersController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const {
            firstname,
            lastname,
            email,
            whatsapp,
            bio,
            password,
        } = request.body;

        const createUserService = container.resolve(CreateUserService);

        const user = await createUserService.execute({
            firstname,
            lastname,
            email,
            whatsapp,
            bio,
            password,
        });

        delete user.password;

        return response.json(user);
    }
}
