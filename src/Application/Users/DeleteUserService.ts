import { DeleteUserRequest } from '@Adapter/Controllers/Users/DeleteUserRequest';
import { UserRepository } from 'src/Domain/Users/UserRepository';
import AppError from 'src/Domain/Middlewares/Errors/AppError';
import { IDeleteSalaryService } from '@Application/Salaries/IDeleteSalaryService';

class DeleteUserService implements IDeleteSalaryService {
  private userRepository = new UserRepository();

  public async execute({ id }: DeleteUserRequest) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppError(`User not found with id: ${id}`);
    }

    await this.userRepository.remove(user);
  }
}

export default DeleteUserService;
