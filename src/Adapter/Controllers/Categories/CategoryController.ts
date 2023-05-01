/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { IBaseController } from 'src/Adapter/Controllers/IBaseController';
import CreateCategoryService from '@Application/Categories/CreateCategoryService';
import ListCategoryService from '@Application/Categories/ListCategoryService';
import DeleteCategoryService from '@Application/Categories/DeleteCategoryService';
import FindCategoryService from '@Application/Categories/FindCategoryService';

export default class CategoryController implements IBaseController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, icon, color } = request.body;

    const createCategory = new CreateCategoryService();

    const category = await createCategory.execute({ name, icon, color });

    return response.json(category);
  }

  public async list(request: Request, response: Response): Promise<Response> {
    const listCategory = new ListCategoryService();

    const categories = await listCategory.execute();

    return response.json(categories);
  }

  update(request: Request, response: Response): Promise<Response> {
    throw new Error('Method not implemented.');
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteCategory = new DeleteCategoryService();

    await deleteCategory.execute({ id });

    return response.json([]);
  }

  public async find(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findCategory = new FindCategoryService();

    const category = await findCategory.execute({ id });

    return response.json(category);
  }
}
