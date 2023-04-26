import { DeleteSalaryRequest } from '@Adapter/Controllers/Salaries/DeleteSalaryRequest';
import { IDeleteSalaryService } from '@Adapter/Controllers/Salaries/IDeleteSalaryService';
import AppError from 'src/Domain/Middlewares/Errors/AppError';
import { SalaryRepository } from 'src/Domain/Salaries/SalaryRepository';

class DeleteSalaryService implements IDeleteSalaryService {
  private salaryRepository = new SalaryRepository();

  public async execute({ id }: DeleteSalaryRequest) {
    const salary = await this.salaryRepository.findById(id);

    if (!salary) {
      throw new AppError(`No salary records found with id ${id}`);
    }

    await this.salaryRepository.remove(id);
  }
}

export default DeleteSalaryService;
