import { category } from '@prisma/client/index';

export interface IListCategoryService {
  execute(): Promise<category[]>;
}
