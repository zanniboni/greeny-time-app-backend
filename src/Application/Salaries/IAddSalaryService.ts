import { AddSalaryRequest } from '@Adapter/Controllers/Salaries/AddSalaryRequest';
import { salary } from '@prisma/client/index';

export interface IAddSalaryService {
  execute({ userId, value, payment_date }: AddSalaryRequest): Promise<salary>;
}
