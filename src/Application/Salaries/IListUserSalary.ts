import { salary } from '@prisma/client/index';
import { ListUserSalaryRequest } from '../../Adapter/Controllers/Salaries/ListUserSalaryRequest';

export interface IListUserSalary {
  execute({ userId }: ListUserSalaryRequest): Promise<salary[]>;
}
