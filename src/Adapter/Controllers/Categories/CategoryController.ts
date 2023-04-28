/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import CreateCategoryService from '@Application/Categories/CreateCategoryService';
import ListCategoryService from '@Application/Categories/ListCategoryService';
import FindCategoryService from '@Application/Categories/FindCategoryService';
import { IBaseController } from 'src/Adapter/Controllers/IBaseController';

export default class CategoryController implements IBaseController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, icon, color } = request.body;

    const createCategory = new CreateCategoryService();

    const category = await createCategory.execute({ name, icon, color });

    return response.json(category);
  }

  public async list(request: Request, response: Response): Promise<Response> {
    const listCategoryService = new ListCategoryService();

    const categories = await listCategoryService.execute();

    return response.json(categories);
  }

  update(request: Request, response: Response): Promise<Response> {
    throw new Error('Method not implemented.');
  }

  delete(request: Request, response: Response): Promise<Response> {
    throw new Error('Method not implemented.');
  }

  public async find(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findCategoryService = new FindCategoryService();

    const category = await findCategoryService.execute({ id });

    return response.json(category);
  }
}
