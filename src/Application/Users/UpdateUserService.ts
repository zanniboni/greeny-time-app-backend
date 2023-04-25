import AppError from 'src/Infrastructure/Middlewares/Errors/AppError';
import { UpdateUserRequest } from 'src/Adapter/Users/UpdateUserRequest';
import { UserRepository } from 'src/Domain/Users/Repositories/UserRepository';
import User from 'src/Domain/Users/User';

class UpdateUserService {
  public async execute({
    id,
    name,
    email,
    password,
  }: UpdateUserRequest): Promise<User> {
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
