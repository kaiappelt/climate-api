import AppError from '../../../../core/domain/errors/AppError';
import { IUserRepository } from '../../domain/repositories/IUserRepository';
import { ICreateUser } from '../../domain/models/ICreateUser';
import { IUser } from '../../domain/models/IUser';
import { inject, injectable } from 'tsyringe';
import { IHashProvider } from '../providers/hashProvider/models/IHashProvider';

@injectable()
class CreateUserService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUserRepository,

        @inject('HashProvider')
        private hashProvider: IHashProvider,
    ) {}

    public async execute({
        name,
        email,
        password,
        zip_code,
        city,
        uf,
        lat,
        lon,
    }: ICreateUser): Promise<IUser> {
        const emailExists = await this.usersRepository.findByEmail(email);

        if (emailExists) {
            throw new AppError('E-mail já existe!', 412);
        }

        const hashedPassword = await this.hashProvider.generateHash(password);

        const user = await this.usersRepository.create({
            name,
            email,
            password: hashedPassword,
            zip_code,
            city,
            uf,
            lat,
            lon,
        });

        return user;
    }
}

export default CreateUserService;
