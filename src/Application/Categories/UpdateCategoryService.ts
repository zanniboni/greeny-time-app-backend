import { UpdateCategoryRequest } from '@Adapter/Controllers/Categories/UpdateCategoryRequest';
import { category } from '@prisma/client';
import { IUpdateCategoryService } from './IUpdateCategoryService';
import { CategoryRepository } from '@Domain/Categories/CategoryRepository';
import AppError from '@Domain/Middlewares/Errors/AppError';

class UpdateCategoryService implements IUpdateCategoryService {
  private categoryRepository = new CategoryRepository();

  public async execute({
    id,
    name,
    icon,
    color,
  }: UpdateCategoryRequest): Promise<category> {
    const category = await this.categoryRepository.findById(id);

    if (!category) {
      throw new AppError(`Category not found with id: ${id}`);
    }

    if (category.permanent) {
      throw new AppError(`Cannot update a permanent category.`);
    }

    const sameName = await this.categoryRepository.findByName(name);

    if (sameName) {
      throw new AppError(`There is already a category with this name ${name}`);
    }

    category.name = name;
    category.icon = icon ? icon : null;
    category.color = color ? color : null;

    await this.categoryRepository.update(category);

    return category;
  }
}

export default UpdateCategoryService;
