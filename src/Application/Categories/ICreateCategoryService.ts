import { category } from '@prisma/client/index';
import { CreateCategoryRequest } from '../../Adapter/Controllers/Categories/CreateCategoryRequest';

export interface ICreateCategoryService {
  execute({ name, description }: CreateCategoryRequest): Promise<category>;
}
