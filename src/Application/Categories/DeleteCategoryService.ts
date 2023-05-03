import { DeleteCategoryRequest } from '@Adapter/Controllers/Categories/DeleteCategoryRequest';
import { IDeleteCategoryService } from './IDeleteCategoryService';
import { CategoryRepository } from '@Domain/Categories/CategoryRepository';
import AppError from '@Domain/Middlewares/Errors/AppError';

class DeleteCategoryService implements IDeleteCategoryService {
  private categoryRepository = new CategoryRepository();

  public async execute({ id }: DeleteCategoryRequest): Promise<void> {
    const category = await this.categoryRepository.findById(id);

    if (!category) {
      throw new AppError(`Category not found with id: ${id}`);
    }

    if (category.permanent) {
      throw new AppError(`Cannot delete a permanent category.`);
    }

    await this.categoryRepository.remove(id);
  }
}

export default DeleteCategoryService;
