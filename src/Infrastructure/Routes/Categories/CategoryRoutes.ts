import { Router } from 'express';
import CategoryController from '../../../Adapter/Controllers/Categories/CategoryController';
import isAuthenticated from 'src/Domain/Middlewares/isAuthenticated';

const categoryRouter = Router();
const categoryController = new CategoryController();

categoryRouter.post('/', isAuthenticated, categoryController.create);

export default categoryRouter;
