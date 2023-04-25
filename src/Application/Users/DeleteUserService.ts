import { DeleteUserRequest } from 'src/Adapter/Users/DeleteUserRequest';
import { IDeleteSalaryService } from 'src/Adapter/Salaries/IDeleteSalaryService';
import { UserRepository } from 'src/Domain/Users/Repositories/UserRepository';
import AppError from 'src/Infrastructure/Middlewares/Errors/AppError';

class DeleteUserService implements IDeleteSalaryService {
  public async execute({ id }: DeleteUserRequest) {
    const user = await UserRepository.findById(id);

    if (!user) {
      throw new AppError(`User not found with id: ${id}`);
    }

    await UserRepository.remove(user);
  }
}

export default DeleteUserService;
