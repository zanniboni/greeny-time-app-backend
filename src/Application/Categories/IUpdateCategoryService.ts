import { UpdateCategoryRequest } from '@Adapter/Controllers/Categories/UpdateCategoryRequest';
import { category } from '@prisma/client';

export interface IUpdateCategoryService {
  execute({ id, name, icon, color }: UpdateCategoryRequest): Promise<category>;
}
