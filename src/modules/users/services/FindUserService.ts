import { UserRepository } from '../repositories/User.Repository';
import AppError from '../../../shared/http/errors/AppError';

interface IRequest {
  id: string;
}

class FindUserService {
  public async execute({ id }: IRequest) {
    const user = await UserRepository.findById(id);

    if (!user) {
      throw new AppError(`User not found with id: ${id}`);
    }

    return user;
  }
}

export default FindUserService;
