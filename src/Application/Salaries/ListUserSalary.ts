import { IListUserSalary } from '@Application/Salaries/IListUserSalary';
import { ListUserSalaryRequest } from '@Adapter/Controllers/Salaries/ListUserSalaryRequest';
import { SalaryRepository } from 'src/Domain/Salaries/SalaryRepository';
import AppError from 'src/Domain/Middlewares/Errors/AppError';
import { salary } from '@prisma/client/index';

class ListUserSalary implements IListUserSalary {
  private salaryRepository = new SalaryRepository();

  public async execute({ userId }: ListUserSalaryRequest): Promise<salary[]> {
    const userSalary = await this.salaryRepository.findByUser(userId);

    if (!userSalary) {
      throw new AppError(`No salary records found for user ${userId}`);
    }

    return userSalary;
  }
}

export default ListUserSalary;
