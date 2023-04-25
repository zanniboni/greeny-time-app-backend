import User from '../../Domain/Users/User';
import { UserRepository } from '../../Domain/Users/Repositories/UserRepository';
import { hash } from 'bcrypt';
import AppError from '../../Infrastructure/Middlewares/Errors/AppError';
import { CreateUserRequest } from 'src/Adapter/Users/CreateUserRequest';
import { ICreateUserService } from 'src/Adapter/Users/ICreateUserService';

class CreateUserService implements ICreateUserService {
  public async execute({
    name,
    email,
    password,
  }: CreateUserRequest): Promise<User> {
    const userExists = await UserRepository.findByEmail(email);

    if (userExists) {
      throw new AppError(`There is already one user with email ${email}`);
    }

    const hashedPassword = await hash(password, 8);

    const user = UserRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await UserRepository.save(user);

    return user;
  }
}

export default CreateUserService;
