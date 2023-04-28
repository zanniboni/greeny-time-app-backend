import { FindCategoryRequest } from '@Adapter/Controllers/Categories/FindCategoryRequest';
import { category } from '@prisma/client/index';

export interface IFindCategoryService {
  execute({ id }: FindCategoryRequest): Promise<category>;
}
