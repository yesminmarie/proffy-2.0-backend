import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../models/User';

interface IRequest {
    firstname: string;
    lastname: string;
    email: string;
    whatsapp: string;
    bio: string;
    password: string;
    avatar: string;
}
class CreateUserService {
    public async execute({
        firstname,
        lastname,
        email,
        whatsapp,
        bio,
        password,
        avatar,
    }: IRequest): Promise<User> {
        const userRepository = getRepository(User);

        const checkUserExists = await userRepository.findOne({
            where: { email },
        });

        if (checkUserExists) {
            throw new Error('Email address already used.');
        }

        const hashedPassword = await hash(password, 8);

        const user = userRepository.create({
            firstname,
            lastname,
            email,
            whatsapp,
            bio,
            password: hashedPassword,
            avatar,
        });

        await userRepository.save(user);

        return user;
    }
}

export default CreateUserService;
