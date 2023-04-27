import { Router } from 'express';
import UserSessionController from '../../../Adapter/Controllers/Sessions/SessionsController';

const sessionRouter = Router();
const sessionController = new UserSessionController();

sessionRouter.post('/', sessionController.create);

export default sessionRouter;
