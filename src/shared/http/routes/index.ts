import sessionRouter from '@modules/users/routes/session.routes';
import usersRouter from '../../../modules/users/routes/users.routes';
import { Router } from 'express';
import salaryRouter from '@modules/salary/routes/salary.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/session', sessionRouter);
routes.use('/salary', salaryRouter);

export default routes;
