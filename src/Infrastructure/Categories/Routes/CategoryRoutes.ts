import { Router } from 'express';
import CategoryController from '../CategoryController';
import isAuthenticated from 'src/Infrastructure/Middlewares/isAuthenticated';

const categoryRouter = Router();
const categoryController = new CategoryController();

categoryRouter.post('/', isAuthenticated, categoryController.create);

export default categoryRouter;
