import { Router } from 'express';
import UserController from '../UserController';
import isAuthenticated from 'src/Infrastructure/Middlewares/isAuthenticated';

const usersRouter = Router();
const usersController = new UserController();

usersRouter.get('/', isAuthenticated, usersController.list);
usersRouter.post('/', usersController.create);
usersRouter.put('/:id', usersController.update);
usersRouter.delete('/:id', usersController.delete);
usersRouter.get('/:id', isAuthenticated, usersController.find);

export default usersRouter;
