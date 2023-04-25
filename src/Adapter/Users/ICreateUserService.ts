import User from 'src/Domain/Users/User';
import { CreateUserRequest } from './CreateUserRequest';

export interface ICreateUserService {
  execute({ name, email, password }: CreateUserRequest): Promise<User>;
}
