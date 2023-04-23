import { AppDataSource } from 'src/data-source';
import Salary from '../entities/Salary';

export const SalaryRepository = AppDataSource.getRepository(Salary).extend({
  async findByUser(userId: string) {
    return this.createQueryBuilder('salary')
      .where('salary.user.id = :userId', { userId })
      .getMany();
  },
  async findById(id: string) {
    return this.createQueryBuilder('salary')
      .where('salary.id = :id', { id })
      .getOne();
  },
});
