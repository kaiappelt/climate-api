import { Request, Response } from 'express';
import CreateUserService from '../../domain/services/CreateUserService';
import { container } from 'tsyringe';
import { IController } from '../../../../core/presentation/contracts/IController';

export default class CreateUserController implements IController {
    public async handle(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { name, email, password, zip_code, city, uf, lat, lon } =
            request.body;

        const createUser = container.resolve(CreateUserService);

        const user = await createUser.execute({
            name,
            email,
            password,
            zip_code,
            city,
            uf,
            lat,
            lon,
        });

        return response.json(user);
    }
}
