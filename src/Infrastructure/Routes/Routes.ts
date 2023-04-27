import sessionRouter from 'src/Infrastructure/Routes/Sessions/SessionRoutes';
import usersRouter from './Users/UserRoutes';
import { Request, Response, Router } from 'express';
import salaryRouter from 'src/Infrastructure/Routes/Salaries/SalaryRoutes';
import categoryRouter from 'src/Infrastructure/Routes/Categories/CategoryRoutes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/session', sessionRouter);
routes.use('/salary', salaryRouter);
routes.use('/category', categoryRouter);
routes.use('/healthcheck', (req: Request, res: Response) => {
  res.sendStatus(200);
});

export default routes;
