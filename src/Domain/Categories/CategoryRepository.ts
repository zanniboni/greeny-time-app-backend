import { CreateCategoryRequest } from '@Adapter/Controllers/Categories/CreateCategoryRequest';
import { PrismaClient, category } from '@prisma/client';

export class CategoryRepository {
  private prisma = new PrismaClient();

  async list() {
    return this.prisma.category.findMany();
  }

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

  async remove(id: string) {
    return this.prisma.category.delete({
      where: {
        id,
      },
    });
  }

  async update(category: category) {
    return this.prisma.category.update({
      where: {
        id: category.id,
      },
      data: {
        name: category.name,
        icon: category.icon,
        color: category.color,
      },
    });
  }
}
