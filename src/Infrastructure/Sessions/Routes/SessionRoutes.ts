import { Router } from 'express';
import UserSessionController from '../SessionsController';

const sessionRouter = Router();
const sessionController = new UserSessionController();

sessionRouter.post('/', sessionController.create);

export default sessionRouter;
