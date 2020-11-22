import { injectable, inject } from 'tsyringe';
import User from '@modules/users/infra/typeorm/entities/User';
import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

interface IRequest {
    firstname: string;
    lastname: string;
    email: string;
    whatsapp: string;
    bio: string;
    password: string;
}
@injectable()
class CreateUserService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,

        @inject('HashProvider')
        private hashProvider: IHashProvider,
    ) {}

    public async execute({
        firstname,
        lastname,
        email,
        whatsapp,
        bio,
        password,
    }: IRequest): Promise<User> {
        const checkUserExists = await this.usersRepository.findByEmail(email);

        if (checkUserExists) {
            throw new AppError('Email address already used.');
        }

        const hashedPassword = await this.hashProvider.generateHash(password);

        const user = await this.usersRepository.create({
            firstname,
            lastname,
            email,
            whatsapp,
            bio,
            password: hashedPassword,
        });

        await this.usersRepository.save(user);

        return user;
    }
}

export default CreateUserService;
