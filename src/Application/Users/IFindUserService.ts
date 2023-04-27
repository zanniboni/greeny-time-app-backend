import { FindUserRequest } from '@Adapter/Controllers/Users/FindUserRequest';
import { users } from '@prisma/client/index';

export interface IFindUserService {
  execute({ id }: FindUserRequest): Promise<users>;
}
