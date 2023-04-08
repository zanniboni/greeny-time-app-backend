import { getCustomRepository } from 'typeorm';
import User from '../entities/User';
import { UserRepository } from '../repositories/User.Repository';
import { hash } from 'bcrypt';
import AppError from '../../../shared/http/errors/AppError';
import { AppDataSource } from '../../../data-source';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: IRequest): Promise<User> {
    const usersRepository = AppDataSource.getCustomRepository(UserRepository);

    const userExists = await usersRepository.findByEmail(email);

    if (userExists) {
      throw new AppError(`There is already one user with email ${email}`);
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await usersRepository.create(user);

    return user;
  }
}

export default CreateUserService;
