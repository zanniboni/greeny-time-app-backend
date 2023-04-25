import Salary from 'src/Domain/Salaries/Salary';
import { ListUserSalaryRequest } from './ListUserSalaryRequest';

export interface IListUserSalary {
  execute({ userId }: ListUserSalaryRequest): Promise<Salary[]>;
}
