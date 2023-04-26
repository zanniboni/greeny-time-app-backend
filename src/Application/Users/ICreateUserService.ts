import { users } from '@prisma/client/index';
import { CreateUserRequest } from '../../Adapter/Controllers/Users/CreateUserRequest';

export interface ICreateUserService {
  execute({ name, email, password }: CreateUserRequest): Promise<users>;
}
