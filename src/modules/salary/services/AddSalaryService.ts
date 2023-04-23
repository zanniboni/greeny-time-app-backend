import { UserRepository } from '@modules/users/repositories/User.Repository';
import Salary from '../entities/Salary';
import { SalaryRepository } from '../repositories/Salary.Repository';
import AppError from '@shared/http/errors/AppError';

interface IRequest {
  userId: string;
  value: number;
  payment_date: Date;
}

class AddSalaryService {
  public async execute({
    userId,
    value,
    payment_date,
  }: IRequest): Promise<Salary> {
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
