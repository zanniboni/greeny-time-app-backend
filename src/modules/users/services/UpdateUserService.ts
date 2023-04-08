import AppError from '@shared/http/errors/AppError';
import User from '../entities/User';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/User.Repository';
import { AppDataSource } from 'src/data-source';

interface IRequest {
  id: string;
  name: string;
  email: string;
  password: string;
}

class UpdateUserService {
  public async execute({ id, name, email, password }: IRequest): Promise<User> {
    const usersRepository = AppDataSource.getRepository(UserRepository);

    const user = await usersRepository.findOne(id);

    if (!user) {
      throw new AppError(`User not found with id ${id}`);
    }

    if (user && email !== user.email) {
      throw new AppError('Email already registered');
    }

    user.name = name;

    user.email = email;

    user.password = password;

    await usersRepository.save(user);

    return user;
  }
}

export default UpdateUserService;
