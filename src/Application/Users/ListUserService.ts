import { IListUserService } from 'src/Adapter/Users/IListUserService';
import { UserRepository } from 'src/Domain/Users/Repositories/UserRepository';
import User from 'src/Domain/Users/User';

class ListUserService implements IListUserService {
  public async execute(): Promise<User[]> {
    const users = UserRepository.find();

    return users;
  }
}

export default ListUserService;
