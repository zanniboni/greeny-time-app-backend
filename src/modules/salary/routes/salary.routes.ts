import { Router } from 'express';
import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import SalaryController from '../controllers/SalaryController';

const salaryRouter = Router();
const salaryController = new SalaryController();

salaryRouter.get('/', isAuthenticated, salaryController.find);
salaryRouter.post('/', isAuthenticated, salaryController.create);
salaryRouter.delete('/:id', isAuthenticated, salaryController.delete);

export default salaryRouter;
