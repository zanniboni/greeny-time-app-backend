import User from 'src/Domain/Users/User';

export interface IListUserService {
  execute(): Promise<User[]>;
}
