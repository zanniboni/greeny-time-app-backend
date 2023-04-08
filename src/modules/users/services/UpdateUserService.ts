import AppError from '@shared/http/errors/AppError';
import User from '../entities/User';
import { UserRepository } from '../repositories/User.Repository';

interface IRequest {
  id: string;
  name: string;
  email: string;
  password: string;
}

class UpdateUserService {
  public async execute({ id, name, email, password }: IRequest): Promise<User> {
    const user = await UserRepository.findById(id);

    if (!user) {
      throw new AppError(`User not found with id ${id}`);
    }

    if (user && email !== user.email) {
      throw new AppError('Email already registered');
    }

    user.name = name;

    user.email = email;

    user.password = password;

    await UserRepository.save(user);

    return user;
  }
}

export default UpdateUserService;
