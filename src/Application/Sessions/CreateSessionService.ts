import AppError from 'src/Infrastructure/Middlewares/Errors/AppError';
import { UserRepository } from '../../Domain/Users/Repositories/UserRepository';
import { sign } from 'jsonwebtoken';
import authConfig from '@config/Auth';
import { compare } from 'bcrypt';
import { CreateSessionRequest } from 'src/Adapter/Sessions/CreateSessionRequest';
import { CreateSessionResponse } from 'src/Adapter/Sessions/CreateSessionResponse';
import { ICreateSessionService } from 'src/Adapter/Sessions/ICreateSessionService';

export default class CreateSessionService implements ICreateSessionService {
  public async execute({
    email,
    password,
  }: CreateSessionRequest): Promise<CreateSessionResponse> {
    const user = await UserRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Incorrect e-mail/password combination', 401);
    }

    const passwordConfirmed = await compare(password, user.password);

    if (!passwordConfirmed) {
      throw new AppError('Incorrect e-mail/password combination', 401);
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: user.id.toString(),
      expiresIn: authConfig.jwt.expiresIn,
    });

    return {
      user,
      token,
    };
  }
}
