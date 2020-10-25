import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';

import uploadConfig from '../config/upload';
import User from '../models/User';

interface IRequest {
    user_id: string;
    avatarFileName: string;
}
class UpdateUserAvatarService {
    public async execute({ user_id, avatarFileName }: IRequest): Promise<User> {
        const userRepository = getRepository(User);

        const user = await userRepository.findOne(user_id);

        if (!user) {
            throw new Error('Only authenticated users can change avatar');
        }

        if (user.avatar) {
            const userAvatarFilePath = path.join(
                uploadConfig.directory,
                user.avatar,
            );

            const userAvatarFileExisits = await fs.promises.stat(
                userAvatarFilePath,
            );

            if (userAvatarFileExisits) {
                await fs.promises.unlink(userAvatarFilePath);
            }
        }

        user.avatar = avatarFileName;

        await userRepository.save(user);

        return user;
    }
}

export default UpdateUserAvatarService;
