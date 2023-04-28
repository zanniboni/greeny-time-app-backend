import { Router } from 'express';
import UserSessionController from '../../../Adapter/Controllers/Sessions/SessionsController';
import { Segments, celebrate } from 'celebrate';
import Joi from 'joi';

const sessionRouter = Router();
const sessionController = new UserSessionController();

sessionRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  sessionController.create,
);

export default sessionRouter;
