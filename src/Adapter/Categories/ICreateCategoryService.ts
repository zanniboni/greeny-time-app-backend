import Category from 'src/Domain/Categories/Category';
import { CreateCategoryRequest } from './CreateCategoryRequest';

export interface ICreateCategoryService {
  execute({ name, description }: CreateCategoryRequest): Promise<Category>;
}
