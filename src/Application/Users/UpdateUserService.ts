import { UpdateUserRequest } from '@Adapter/Controllers/Users/UpdateUserRequest';
import { UserRepository } from 'src/Domain/Users/UserRepository';
import AppError from 'src/Domain/Middlewares/Errors/AppError';
import { users } from '@prisma/client/index';

class UpdateUserService {
  private userRepository = new UserRepository();

  public async execute({
    id,
    name,
    email,
    password,
  }: UpdateUserRequest): Promise<users> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppError(`User not found with id ${id}`);
    }

    if (user && email !== user.email) {
      throw new AppError('Email already registered');
    }

    user.name = name;
    user.email = email;
    user.password = password;

    await this.userRepository.update(user);

    return user;
  }
}

export default UpdateUserService;
