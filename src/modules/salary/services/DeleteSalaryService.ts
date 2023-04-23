import AppError from '@shared/http/errors/AppError';
import { SalaryRepository } from '../repositories/Salary.Repository';

interface IRequest {
  id: string;
}

class DeleteSalaryService {
  public async execute({ id }: IRequest) {
    const salary = await SalaryRepository.findById(id);

    if (!salary) {
      throw new AppError(`No salary records found with id ${id}`);
    }

    await SalaryRepository.remove(salary);
  }
}

export default DeleteSalaryService;
