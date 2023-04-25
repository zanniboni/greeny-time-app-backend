import User from 'src/Domain/Users/User';
import { UpdateUserRequest } from './UpdateUserRequest';

export interface IUpdateUserService {
  execute({ id, name, email, password }: UpdateUserRequest): Promise<User>;
}
