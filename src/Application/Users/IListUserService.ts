import { users } from '@prisma/client/index';

export interface IListUserService {
  execute(): Promise<users[]>;
}
