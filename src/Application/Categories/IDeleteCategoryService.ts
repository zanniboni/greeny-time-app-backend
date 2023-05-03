import { DeleteCategoryRequest } from '@Adapter/Controllers/Categories/DeleteCategoryRequest';

export interface IDeleteCategoryService {
  execute({ id }: DeleteCategoryRequest): Promise<void>;
}
