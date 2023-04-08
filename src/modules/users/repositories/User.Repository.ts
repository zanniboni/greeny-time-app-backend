import { AppDataSource } from 'src/data-source';
import User from '../entities/User';

export const UserRepository = AppDataSource.getRepository(User).extend({
  findByName(name: string) {
    return this.createQueryBuilder('user')
      .where('user.name = :name', { name })
      .getMany();
  },
  findByEmail(email: string) {
    return this.createQueryBuilder('user')
      .where('user.email = :email', { email })
      .getOne();
  },
  findById(id: string) {
    return this.createQueryBuilder('user')
      .where('user.id = :id', { id })
      .getOne();
  },
});
