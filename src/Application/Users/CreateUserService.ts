import { hash } from 'bcrypt';
import { CreateUserRequest } from '@Adapter/Controllers/Users/CreateUserRequest';
import { ICreateUserService } from '@Application/Users/ICreateUserService';
import { UserRepository } from 'src/Domain/Users/UserRepository';
import AppError from 'src/Domain/Middlewares/Errors/AppError';
import { users } from '@prisma/client/index';
class CreateUserService implements ICreateUserService {
  private userRepository = new UserRepository();

  public async execute({
    name,
    email,
    password,
  }: CreateUserRequest): Promise<users> {
    const userExists = await this.userRepository.findByEmail(email);

    if (userExists) {
      throw new AppError(`There is already one user with email ${email}`);
    }

    const hashedPassword = await hash(password, 8);

    const user = await this.userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    return user;
  }
}

export default CreateUserService;
