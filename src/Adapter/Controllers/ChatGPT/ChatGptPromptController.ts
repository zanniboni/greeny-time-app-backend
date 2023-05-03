import ChatGptPromptService from '@Application/ChatGPT/ChatGptPromptService';
import { Request, Response } from 'express';

export default class ChatGptPromptController {
  public async requestPrompt(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { prompt } = request.body;

    const promptService = new ChatGptPromptService();

    const responsePrompt = await promptService.execute(prompt);

    return response.json(responsePrompt);
  }
}
