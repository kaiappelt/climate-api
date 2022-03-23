import UsersRepository from '@features/users/infra/repositories/UsersRepository';
import { container } from 'tsyringe';
import { IUserRepository } from '../repositories/IUserRepository';
import HashProvider from './hashProvider/implementations/HashProvider';
import { IHashProvider } from './hashProvider/models/IHashProvider';

container.registerSingleton<IUserRepository>(
    'UsersRepository',
    UsersRepository,
);

container.registerSingleton<IHashProvider>('HashProvider', HashProvider);
