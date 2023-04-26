import { DeleteUserRequest } from './DeleteUserRequest';

export interface IDeleteUserService {
  execute({ id }: DeleteUserRequest): void;
}
