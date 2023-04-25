import { CreateSessionRequest } from './CreateSessionRequest';

export interface ICreateSessionService {
  execute({ email, password }: CreateSessionRequest): void;
}
