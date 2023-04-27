import { CreateSessionRequest } from '../../Adapter/Controllers/Sessions/CreateSessionRequest';

export interface ICreateSessionService {
  execute({ email, password }: CreateSessionRequest): void;
}
