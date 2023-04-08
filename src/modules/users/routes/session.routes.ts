import { Router } from 'express';
import UserSessionController from '../controllers/SessionsController';

const sessionRouter = Router();
const sessionController = new UserSessionController();

sessionRouter.post('/', sessionController.create);

export default sessionRouter;
