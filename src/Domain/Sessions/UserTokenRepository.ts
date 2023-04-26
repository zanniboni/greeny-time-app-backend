import { PrismaClient } from '@prisma/client';

export class UserRepository {
  private prisma = new PrismaClient();

  async findByToken(token: string) {
    return this.prisma.user_tokens.findFirst({
      where: {
        token,
      },
    });
  }

  async generate(user_id: string) {
    const userToken = this.prisma.user_tokens.create({
      data: {
        user_id,
      },
    });

    return userToken;
  }
}
