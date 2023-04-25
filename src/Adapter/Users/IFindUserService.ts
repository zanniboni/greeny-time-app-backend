import User from 'src/Domain/Users/User';
import { FindUserRequest } from './FindUserRequest';

export interface IFindUserService {
  execute({ id }: FindUserRequest): Promise<User>;
}
