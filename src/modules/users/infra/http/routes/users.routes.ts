import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', async (request, response) => {
    const usersRepository = new UsersRepository();
    const {
        firstname,
        lastname,
        email,
        whatsapp,
        bio,
        password,
    } = request.body;

    const createUserService = new CreateUserService(usersRepository);

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
});

usersRouter.patch(
    '/avatar',
    ensureAuthenticated,
    upload.single('avatar'),
    async (request, response) => {
        const usersRepository = new UsersRepository();
        const updateUserAvatarService = new UpdateUserAvatarService(
            usersRepository,
        );

        const user = await updateUserAvatarService.execute({
            user_id: request.user.id,
            avatarFileName: request.file.filename,
        });

        delete user.password;

        return response.json(user);
    },
);
export default usersRouter;
