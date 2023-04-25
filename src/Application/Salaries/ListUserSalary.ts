import AppError from 'src/Infrastructure/Middlewares/Errors/AppError';
import { IListUserSalary } from 'src/Adapter/Salaries/IListUserSalary';
import { ListUserSalaryRequest } from 'src/Adapter/Salaries/ListUserSalaryRequest';
import { SalaryRepository } from 'src/Domain/Salaries/Repositories/SalaryRepository';
import Salary from 'src/Domain/Salaries/Salary';

class ListUserSalary implements IListUserSalary {
  public async execute({ userId }: ListUserSalaryRequest): Promise<Salary[]> {
    const userSalary = await SalaryRepository.findByUser(userId);

    if (!userSalary) {
      throw new AppError(`No salary records found for user ${userId}`);
    }

    return userSalary;
  }
}

export default ListUserSalary;
