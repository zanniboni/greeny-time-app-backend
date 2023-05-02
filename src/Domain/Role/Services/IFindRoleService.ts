import { role } from '@prisma/client';
import { FindRoleRequest } from './FindRoleRequest';

export interface IFindRoleService {
  execute({ id }: FindRoleRequest): Promise<role>;
}
