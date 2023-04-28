import { FindCategoryRequest } from '@Adapter/Controllers/Categories/FindCategoryRequest';
import { category } from '@prisma/client';
import { IFindCategoryService } from './IFindCategoryService';
import { CategoryRepository } from '@Domain/Categories/CategoryRepository';
import AppError from '@Domain/Middlewares/Errors/AppError';

class FindCategoryService implements IFindCategoryService {
  private categoryRepository = new CategoryRepository();

  async execute({ id }: FindCategoryRequest): Promise<category> {
    const category = await this.categoryRepository.findById(id);

    if (!category) {
      throw new AppError(`Category not found with id: ${id}`);
    }

    return category;
  }
}

export default FindCategoryService;
