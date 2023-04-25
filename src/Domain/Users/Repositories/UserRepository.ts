import { AppDataSource } from 'src/data-source';
import User from '../User';

export const UserRepository = AppDataSource.getRepository(User).extend({
  async findByName(name: string) {
    return this.createQueryBuilder('user')
      .where('user.name = :name', { name })
      .getMany();
  },
  async findByEmail(email: string) {
    return this.createQueryBuilder('user')
      .where('user.email = :email', { email })
      .getOne();
  },
  async findById(id: string) {
    return this.createQueryBuilder('user')
      .where('user.id = :id', { id })
      .getOne();
  },
});
