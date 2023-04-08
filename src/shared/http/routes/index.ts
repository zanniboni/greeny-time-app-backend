import sessionRouter from '@modules/users/routes/session.routes';
import usersRouter from '../../../modules/users/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/session', sessionRouter);

export default routes;
