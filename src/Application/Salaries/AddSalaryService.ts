import { UserRepository } from 'src/Domain/Users/Repositories/UserRepository';
import Salary from '../../Domain/Salaries/Salary';
import { SalaryRepository } from '../../Domain/Salaries/Repositories/SalaryRepository';
import AppError from 'src/Infrastructure/Middlewares/Errors/AppError';
import { AddSalaryRequest } from 'src/Adapter/Salaries/AddSalaryRequest';
import { IAddSalaryService } from 'src/Adapter/Salaries/IAddSalaryService';

class AddSalaryService implements IAddSalaryService {
  public async execute({
    userId,
    value,
    payment_date,
  }: AddSalaryRequest): Promise<Salary> {
    const user = await UserRepository.findById(userId);

    if (!user) {
      throw new AppError(`There is no user with id ${userId}`);
    }

    const salary = SalaryRepository.create({
      value,
      payment_date,
      user,
    });

    await SalaryRepository.save(salary);

    return salary;
  }
}

export default AddSalaryService;
