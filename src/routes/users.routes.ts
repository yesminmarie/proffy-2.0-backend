import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
    try {
        const {
            firstname,
            lastname,
            email,
            whatsapp,
            bio,
            password,
            avatar,
        } = request.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({
            firstname,
            lastname,
            email,
            whatsapp,
            bio,
            password,
            avatar,
        });

        delete user.password;

        return response.json(user);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default usersRouter;
