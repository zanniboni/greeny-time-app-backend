import User from '../entities/User';
import { UserRepository } from '../repositories/User.Repository';

class ListUserService {
  public async execute(): Promise<User[]> {
    const users = UserRepository.find();

    return users;
  }
}

export default ListUserService;
