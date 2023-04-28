import { Router } from 'express';
import CategoryController from '../../../Adapter/Controllers/Categories/CategoryController';
import isAuthenticated from 'src/Domain/Middlewares/isAuthenticated';

const categoryRouter = Router();
const categoryController = new CategoryController();

categoryRouter.get('/', isAuthenticated, categoryController.list);
categoryRouter.post('/', isAuthenticated, categoryController.create);
categoryRouter.get('/:id', isAuthenticated, categoryController.find);

export default categoryRouter;
