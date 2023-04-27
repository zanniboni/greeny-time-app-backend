import { UserRepository } from 'src/Domain/Users/UserRepository';
import { SalaryRepository } from '../../Domain/Salaries/SalaryRepository';
import { AddSalaryRequest } from '@Adapter/Controllers/Salaries/AddSalaryRequest';
import AppError from 'src/Domain/Middlewares/Errors/AppError';
import { salary } from '@prisma/client/index';
import { IAddSalaryService } from './IAddSalaryService';

class AddSalaryService implements IAddSalaryService {
  private usersRepository = new UserRepository();
  private salaryRepository = new SalaryRepository();

  public async execute({
    userId,
    value,
    payment_date,
  }: AddSalaryRequest): Promise<salary> {
    const user = await this.usersRepository.findById(userId);

    if (!user) {
      throw new AppError(`There is no user with id ${userId}`);
    }

    const salary = await this.salaryRepository.create({
      value,
      payment_date,
      userId: user.id,
    });

    return salary;
  }
}

export default AddSalaryService;
