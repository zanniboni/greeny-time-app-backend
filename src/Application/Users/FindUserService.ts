import { FindUserRequest } from '@Adapter/Controllers/Users/FindUserRequest';
import { UserRepository } from 'src/Domain/Users/UserRepository';
import AppError from 'src/Domain/Middlewares/Errors/AppError';
import { users } from '@prisma/client/index';
import { IFindUserService } from './IFindUserService';
class FindUserService implements IFindUserService {
  private userRepository = new UserRepository();

  public async execute({ id }: FindUserRequest): Promise<users> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppError(`User not found with id: ${id}`);
    }

    return user;
  }
}

export default FindUserService;
