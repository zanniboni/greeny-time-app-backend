import AppError from 'src/Infrastructure/Middlewares/Errors/AppError';
import { FindUserRequest } from 'src/Adapter/Users/FindUserRequest';
import { IFindUserService } from 'src/Adapter/Users/IFindUserService';
import { UserRepository } from 'src/Domain/Users/Repositories/UserRepository';
import User from 'src/Domain/Users/User';

class FindUserService implements IFindUserService {
  public async execute({ id }: FindUserRequest): Promise<User> {
    const user = await UserRepository.findById(id);

    if (!user) {
      throw new AppError(`User not found with id: ${id}`);
    }

    return user;
  }
}

export default FindUserService;
