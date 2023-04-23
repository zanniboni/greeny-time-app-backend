import { AppDataSource } from 'src/data-source';
import Category from '../entities/Category';

export const CategoryRepository = AppDataSource.getRepository(Category).extend({
  async findById(id: string) {
    return this.createQueryBuilder('category')
      .where('category.id = :id', { id })
      .getOne();
  },
  async findByName(name: string) {
    return this.createQueryBuilder('category')
      .where('category.name = :name', { name })
      .getOne();
  },
});
