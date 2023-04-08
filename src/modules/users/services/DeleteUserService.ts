import { UserRepository } from '../repositories/User.Repository';
import AppError from '../../../shared/http/errors/AppError';

interface IRequest {
  id: string;
}

class DeleteUserService {
  public async execute({ id }: IRequest) {
    const user = await UserRepository.findById(id);

    if (!user) {
      throw new AppError(`User not found with id: ${id}`);
    }

    await UserRepository.remove(user);
  }
}

export default DeleteUserService;
