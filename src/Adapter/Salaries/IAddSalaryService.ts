import Salary from 'src/Domain/Salaries/Salary';
import { AddSalaryRequest } from './AddSalaryRequest';

export interface IAddSalaryService {
  execute({ userId, value, payment_date }: AddSalaryRequest): Promise<Salary>;
}
