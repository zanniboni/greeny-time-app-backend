import { CreateCategoryRequest } from '@Adapter/Controllers/Categories/CreateCategoryRequest';
import { PrismaClient } from '@prisma/client';

export class CategoryRepository {
  private prisma = new PrismaClient();

  async findById(id: string) {
    return this.prisma.category.findFirst({
      where: {
        id,
      },
    });
  }

  async findByName(name: string) {
    return this.prisma.category.findFirst({
      where: {
        name,
      },
    });
  }

  async create({ name, icon, color }: CreateCategoryRequest) {
    return this.prisma.category.create({
      data: {
        name,
        icon,
        color,
      },
    });
  }
}
