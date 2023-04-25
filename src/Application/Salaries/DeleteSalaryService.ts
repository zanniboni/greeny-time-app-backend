import AppError from 'src/Infrastructure/Middlewares/Errors/AppError';
import { DeleteSalaryRequest } from 'src/Adapter/Salaries/DeleteSalaryRequest';
import { IDeleteSalaryService } from 'src/Adapter/Salaries/IDeleteSalaryService';
import { SalaryRepository } from 'src/Domain/Salaries/Repositories/SalaryRepository';

class DeleteSalaryService implements IDeleteSalaryService {
  public async execute({ id }: DeleteSalaryRequest) {
    const salary = await SalaryRepository.findById(id);

    if (!salary) {
      throw new AppError(`No salary records found with id ${id}`);
    }

    await SalaryRepository.remove(salary);
  }
}

export default DeleteSalaryService;
