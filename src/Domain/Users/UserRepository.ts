import { PrismaClient } from '@prisma/client';
import { CreateUserRequest } from '@Adapter/Controllers/Users/CreateUserRequest';
import { User } from './User';

export class UserRepository {
  private prisma = new PrismaClient();

  async find() {
    return this.prisma.users.findMany();
  }

  async findByName(name: string) {
    return this.prisma.users.findFirst({
      where: {
        name,
      },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.users.findFirst({
      where: {
        email,
      },
    });
  }

  async findById(id: string) {
    return this.prisma.users.findFirst({
      where: {
        id,
      },
    });
  }

  async create(user: CreateUserRequest) {
    return this.prisma.users.create({
      data: user,
    });
  }

  async remove(user: User) {
    return this.prisma.users.delete({
      where: {
        id: user.id,
      },
    });
  }

  async update(user: User) {
    return this.prisma.users.update({
      where: {
        id: user.id,
      },
      data: {
        email: user.email,
        password: user.id,
        name: user.name,
      },
    });
  }
}
