import AppError from 'src/Infrastructure/Middlewares/Errors/AppError';
import Category from '../../Domain/Categories/Category';
import { CategoryRepository } from '../../Domain/Categories/Repositories/CategoryRepository';
import { ICreateCategoryService } from 'src/Adapter/Categories/ICreateCategoryService';
import { CreateCategoryRequest } from 'src/Adapter/Categories/CreateCategoryRequest';

export class CreateCategoryService implements ICreateCategoryService {
  public async execute({
    name,
    description,
  }: CreateCategoryRequest): Promise<Category> {
    const categoryNameExists = await CategoryRepository.findByName(name);

    if (categoryNameExists) {
      throw new AppError(`There is already one category with name ${name}`);
    }

    const category = CategoryRepository.create({
      name,
      description,
    });

    return await CategoryRepository.save(category);
  }
}
