import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import isAuthenticated from '../../../../core/presentation/http/middlewares/isAuthnticated';
import CreateUserController from '../controllers/CreateUserController';
import ListUsersController from '../controllers/ListUsersController';

const usersRoutes = Router();
const listUsersController = new ListUsersController();
const createUserController = new CreateUserController();

// Para listar os usuários cadastrados, é preciso estar autenticado
usersRoutes.get('/', isAuthenticated, listUsersController.handle);

usersRoutes.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
            zip_code: Joi.string().required(),
            city: Joi.string().required(),
            uf: Joi.string().required(),
            lat: Joi.number().required(),
            lon: Joi.number().required(),

            // Verifica se os campos Senha e Confirmação de Senha são iguais
            password_confirmation: Joi.string()
                .valid(Joi.ref('password'))
                .when('password', {
                    is: Joi.exist(),
                    then: Joi.required(),
                }),
        },
    }),
    createUserController.handle,
);

export default usersRoutes;
