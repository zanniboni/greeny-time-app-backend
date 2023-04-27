import { CategoryRepository } from '../../Domain/Categories/CategoryRepository';
import { ICreateCategoryService } from '@Application/Categories/ICreateCategoryService';
import { CreateCategoryRequest } from '@Adapter/Controllers/Categories/CreateCategoryRequest';
import AppError from 'src/Domain/Middlewares/Errors/AppError';
import { category } from '@prisma/client/index';

export class CreateCategoryService implements ICreateCategoryService {
  private categoryRepository = new CategoryRepository();

  public async execute({
    name,
    icon,
    color,
  }: CreateCategoryRequest): Promise<category> {
    const categoryNameExists = await this.categoryRepository.findByName(name);

    if (categoryNameExists) {
      throw new AppError(`There is already one category with name ${name}`);
    }

    const category = await this.categoryRepository.create({
      name,
      icon,
      color,
    });

    return category;
  }
}
