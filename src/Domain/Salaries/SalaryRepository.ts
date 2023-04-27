import { AddSalaryRequest } from '@Adapter/Controllers/Salaries/AddSalaryRequest';
import { PrismaClient } from '@prisma/client';

export class SalaryRepository {
  private prisma = new PrismaClient();

  async findByUser(userId: string) {
    return this.prisma.salary.findMany({
      where: {
        userId,
      },
    });
  }

  async findById(id: string) {
    return this.prisma.salary.findFirst({
      where: {
        id,
      },
    });
  }

  async create({ userId, value, payment_date }: AddSalaryRequest) {
    return this.prisma.salary.create({
      data: {
        userId,
        value,
        payment_date,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.salary.delete({
      where: {
        id,
      },
    });
  }
}
