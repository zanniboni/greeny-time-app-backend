/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { CreateCategoryService } from '../../../Application/Categories/CreateCategoryService';
import { IBaseController } from 'src/Adapter/Controllers/IBaseController';

export default class CategoryController implements IBaseController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, icon, color } = request.body;

    const createCategory = new CreateCategoryService();

    const category = await createCategory.execute({ name, icon, color });

    return response.json(category);
  }

  list(request: Request, response: Response): Promise<Response> {
    throw new Error('Method not implemented.');
  }

  update(request: Request, response: Response): Promise<Response> {
    throw new Error('Method not implemented.');
  }

  delete(request: Request, response: Response): Promise<Response> {
    throw new Error('Method not implemented.');
  }

  find(request: Request, response: Response): Promise<Response> {
    throw new Error('Method not implemented.');
  }
}
