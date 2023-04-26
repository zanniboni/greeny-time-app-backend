import { users } from '@prisma/client/index';

export interface CreateSessionResponse {
  user: users;
  token: string;
}
