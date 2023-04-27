import { Router } from 'express';
import SalaryController from '../../../Adapter/Controllers/Salaries/SalaryController';
import isAuthenticated from 'src/Domain/Middlewares/isAuthenticated';

const salaryRouter = Router();
const salaryController = new SalaryController();

salaryRouter.get('/', isAuthenticated, salaryController.find);
salaryRouter.post('/', isAuthenticated, salaryController.create);
salaryRouter.delete('/:id', isAuthenticated, salaryController.delete);

export default salaryRouter;
