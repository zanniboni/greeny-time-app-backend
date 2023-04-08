import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/User.Repository';
import AppError from '../../../shared/http/errors/AppError';

interface IRequest {
  id: string;
}

class DeleteUserService {
  public async execute({ id }: IRequest) {
    const usersRepository = getCustomRepository(UserRepository);

    const user = await usersRepository.findOne(id);

    if (!user) {
      throw new AppError(`User not found with id: ${id}`);
    }

    await usersRepository.remove(user);
  }
}

export default DeleteUserService;
