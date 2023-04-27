import { CategoryRepository } from '../../Domain/Categories/CategoryRepository';
import { IListCategoryService } from '@Application/Categories/IListCategoryService';
import { category } from '@prisma/client/index';

export class ListCategoryService implements IListCategoryService {
  private categoryRepository = new CategoryRepository();

  public async execute(): Promise<category[]> {
    const categories = await this.categoryRepository.list();

    return categories;
  }
}
