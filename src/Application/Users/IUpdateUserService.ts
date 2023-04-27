import { UpdateUserRequest } from '@Adapter/Controllers/Users/UpdateUserRequest';
import { users } from '@prisma/client/index';

export interface IUpdateUserService {
  execute({ id, name, email, password }: UpdateUserRequest): Promise<users>;
}
