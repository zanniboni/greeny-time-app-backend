import { Request, Response } from 'express';
import CreateSessionService from '../../Application/Sessions/CreateSessionService';

export default class UserSessionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const createSessionUser = new CreateSessionService();

    const user = await createSessionUser.execute({ email, password });

    return response.json(user);
  }
}
