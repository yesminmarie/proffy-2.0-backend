import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '@modules/users/infra/typeorm/entities/User';
import AppError from '@shared/errors/AppError';

interface IRequest {
    firstname: string;
    lastname: string;
    email: string;
    whatsapp: string;
    bio: string;
    password: string;
}
class CreateUserService {
    public async execute({
        firstname,
        lastname,
        email,
        whatsapp,
        bio,
        password,
    }: IRequest): Promise<User> {
        const userRepository = getRepository(User);

        const checkUserExists = await userRepository.findOne({
            where: { email },
        });

        if (checkUserExists) {
            throw new AppError('Email address already used.');
        }

        const hashedPassword = await hash(password, 8);

        const user = userRepository.create({
            firstname,
            lastname,
            email,
            whatsapp,
            bio,
            password: hashedPassword,
        });

        await userRepository.save(user);

        return user;
    }
}

export default CreateUserService;
