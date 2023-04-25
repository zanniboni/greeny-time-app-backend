import { Router } from 'express';
import isAuthenticated from 'src/Infrastructure/Middlewares/isAuthenticated';
import SalaryController from '../SalaryController';

const salaryRouter = Router();
const salaryController = new SalaryController();

salaryRouter.get('/', isAuthenticated, salaryController.find);
salaryRouter.post('/', isAuthenticated, salaryController.create);
salaryRouter.delete('/:id', isAuthenticated, salaryController.delete);

export default salaryRouter;
