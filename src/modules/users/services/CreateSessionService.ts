import AppError from '@shared/http/errors/AppError';
import User from '../entities/User';
import { UserRepository } from '../repositories/User.Repository';
import { sign } from 'jsonwebtoken';
import authConfig from '@config/auth';
import { compare } from 'bcrypt';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

class CreateSessionService {
  public async execute({ email, password }: IRequest): Promise<IResponse> {
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

export default CreateSessionService;
