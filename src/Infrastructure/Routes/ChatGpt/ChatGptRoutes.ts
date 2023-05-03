import { Router } from 'express';
import { Segments, celebrate } from 'celebrate';
import Joi from 'joi';
import ChatGptPromptController from '@Adapter/Controllers/ChatGPT/ChatGptPromptController';

const promptRouter = Router();
const promptController = new ChatGptPromptController();

promptRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      prompt: Joi.string().required(),
    },
  }),
  promptController.requestPrompt,
);
promptRouter;
export default promptRouter;
