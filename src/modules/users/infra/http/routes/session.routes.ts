import { Router } from 'express';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
    const usersRepository = new UsersRepository();
    const { email, password } = request.body;

    const authenticateUserService = new AuthenticateUserService(
        usersRepository,
    );

    const { user, token } = await authenticateUserService.execute({
        email,
        password,
    });

    delete user.password;

    return response.json({ user, token });
});

export default sessionsRouter;
