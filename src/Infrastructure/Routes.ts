import sessionRouter from 'src/Infrastructure/Sessions/Routes/SessionRoutes';
import usersRouter from './Users/Routes/UserRoutes';
import { Router } from 'express';
import salaryRouter from 'src/Infrastructure/Salaries/Routes/SalaryRoutes';
import categoryRouter from 'src/Infrastructure/Categories/Routes/CategoryRoutes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/session', sessionRouter);
routes.use('/salary', salaryRouter);
routes.use('/category', categoryRouter);

export default routes;
