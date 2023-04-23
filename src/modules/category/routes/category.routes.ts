import { Router } from 'express';
import CategoryController from '../controllers/CategoryController';
import isAuthenticated from '@shared/http/middlewares/isAuthenticated';

const categoryRouter = Router();
const categoryController = new CategoryController();

categoryRouter.post('/', isAuthenticated, categoryController.create);

export default categoryRouter;
