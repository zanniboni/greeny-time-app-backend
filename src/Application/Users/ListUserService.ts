import { UserRepository } from 'src/Domain/Users/UserRepository';
import { users } from '@prisma/client/index';
import { IListUserService } from './IListUserService';

class ListUserService implements IListUserService {
  private userRepository = new UserRepository();

  public async execute(): Promise<users[]> {
    const users = await this.userRepository.find();

    return users;
  }
}

export default ListUserService;
