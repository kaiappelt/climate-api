import { Router } from 'express';
import sessionsRouter from '@features/auth/presentation/routes/sessions.routes';
import usersRoutes from '@features/users/presentation/routes/users.routes';

const routes = Router();

routes.use('/login', sessionsRouter);
routes.use('/users', usersRoutes);

export default routes;
