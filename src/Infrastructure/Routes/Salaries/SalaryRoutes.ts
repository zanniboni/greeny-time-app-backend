import { Router } from 'express';
import SalaryController from '../../../Adapter/Controllers/Salaries/SalaryController';
import isAuthenticated from 'src/Domain/Middlewares/isAuthenticated';
import { Segments, celebrate } from 'celebrate';
import Joi from 'joi';

const salaryRouter = Router();
const salaryController = new SalaryController();

salaryRouter.get(
  '/',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  isAuthenticated,
  salaryController.find,
);

salaryRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      value: Joi.number().required(),
      payment_date: Joi.date().required(),
    },
  }),
  isAuthenticated,
  salaryController.create,
);

salaryRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  isAuthenticated,
  salaryController.delete,
);

export default salaryRouter;
