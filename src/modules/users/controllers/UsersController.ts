import { Request, Response } from 'express';
import ListUserService from '../services/ListUserService';
import CreateUserService from '../services/CreateUserService';
import UpdateUserService from '../services/UpdateUserService';
import DeleteUserService from '../services/DeleteUserService';
import FindUserService from '../services/FindUserService';

export default class UserController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listUsers = new ListUserService();

    const users = await listUsers.execute();

    return response.json(users);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({ name, email, password });

    return response.json(user);
  }

  public async update(request: Request, respose: Response): Promise<Response> {
    const { id, name, email, password } = request.body;

    const updateUser = new UpdateUserService();

    const user = updateUser.execute({ id, name, email, password });

    return respose.json(user);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteUser = new DeleteUserService();

    await deleteUser.execute({ id });

    return response.json([]);
  }

  public async find(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findUser = new FindUserService();

    const user = await findUser.execute({ id });

    return response.json(user);
  }
}
