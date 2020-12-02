import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import ISchedulesRepository from '@modules/schedules/repositories/ISchedulesRepository';
import SchedulesRepository from '@modules/schedules/infra/typeorm/repositories/SchedulesRepository';

import IClassesRepository from '@modules/classes/repositories/IClassesRepository';
import ClassesRepository from '@modules/classes/infra/typeorm/repositories/ClassesRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

container.registerSingleton<ISchedulesRepository>(
    'SchedulesRepository',
    SchedulesRepository,
);

container.registerSingleton<IClassesRepository>(
    'ClassesRepository',
    ClassesRepository,
);

container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository,
);

container.registerSingleton<IUserTokensRepository>(
    'UserTokensRepository',
    UserTokensRepository,
);
