import AppError from '@shared/http/errors/AppError';
import Salary from '../entities/Salary';
import { SalaryRepository } from '../repositories/Salary.Repository';

interface IRequest {
  userId: string;
}
class ListUserSalary {
  public async execute({ userId }: IRequest): Promise<Salary[]> {
    const userSalary = await SalaryRepository.findByUser(userId);

    if (!userSalary) {
      throw new AppError(`No salary records found for user ${userId}`);
    }

    return userSalary;
  }
}

export default ListUserSalary;
