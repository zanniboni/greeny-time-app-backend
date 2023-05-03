import { Router } from 'express';
import CategoryController from '../../../Adapter/Controllers/Categories/CategoryController';
import isAuthenticated from 'src/Domain/Middlewares/isAuthenticated';
import { Segments, celebrate } from 'celebrate';
import Joi from 'joi';
import CheckUserRole from '@Domain/Middlewares/CheckUserRole';

const categoryRouter = Router();
const categoryController = new CategoryController();

categoryRouter.get(
  '/',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required,
    },
  }),
  isAuthenticated,
  CheckUserRole,
  categoryController.list,
);

categoryRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      icon: Joi.string().optional(),
      color: Joi.string().optional(),
    },
  }),
  isAuthenticated,
  categoryController.create,
);

categoryRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  isAuthenticated,
  categoryController.find,
);

categoryRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },

    [Segments.BODY]: {
      name: Joi.string().required(),
      icon: Joi.string().optional(),
      color: Joi.string().optional(),
    },
  }),
  isAuthenticated,
  categoryController.update,
);

categoryRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  isAuthenticated,
  categoryController.delete,
);

export default categoryRouter;
