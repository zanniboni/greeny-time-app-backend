import { Request, Response } from 'express';
import { CreateCategoryService } from '../services/CreateCategoryService';

export default class CategoryController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const createCategory = new CreateCategoryService();

    const category = await createCategory.execute({ name, description });

    return response.json(category);
  }
}
