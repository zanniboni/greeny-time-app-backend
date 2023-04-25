import User from 'src/Domain/Users/User';

export interface CreateSessionResponse {
  user: User;
  token: string;
}
