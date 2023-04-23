import AppError from '@shared/http/errors/AppError';
import Category from '../entities/Category';
import { CategoryRepository } from '../repositories/Category.Repository';

interface IRequest {
  name: string;
  description: string;
}

export class CreateCategoryService {
  public async execute({ name, description }: IRequest): Promise<Category> {
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
