import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

import CreateUserService from '../services/CreateUserService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const upload = multer(uploadConfig);

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

usersRouter.patch(
    '/avatar',
    ensureAuthenticated,
    upload.single('avatar'),
    async (request, response) => {
        console.log(request.file);
        return response.json({ ok: true });
    },
);
export default usersRouter;
