import { UserRepository } from '../../Domain/Users/UserRepository';
import { sign } from 'jsonwebtoken';
import authConfig from '@Domain/Middlewares/Config/Auth';
import { compare } from 'bcrypt';
import { CreateSessionRequest } from '@Adapter/Controllers/Sessions/CreateSessionRequest';
import { CreateSessionResponse } from '@Adapter/Controllers/Sessions/CreateSessionResponse';
import { ICreateSessionService } from '@Application/Sessions/ICreateSessionService';
import AppError from 'src/Domain/Middlewares/Errors/AppError';
import { UserRoleTypes } from '@Application/Users/UserRoleTypes';
import { RoleRepository } from '@Domain/Role/RoleRepository';

export default class CreateSessionService implements ICreateSessionService {
  private usersRepository = new UserRepository();
  private roleRepository = new RoleRepository();

  public async execute({
    email,
    password,
  }: CreateSessionRequest): Promise<CreateSessionResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Incorrect e-mail/password combination', 401);
    }

    const passwordConfirmed = await compare(password, user.password);

    if (!passwordConfirmed) {
      throw new AppError('Incorrect e-mail/password combination', 401);
    }

    if (!user.roleId) {
      throw new AppError('Undefined role for user.', 403);
    }

    const role = await this.roleRepository.findById(user.roleId);

    if (!role) {
      throw new AppError('Role not found', 401);
    }

    authConfig.jwt.role = role.name;
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
