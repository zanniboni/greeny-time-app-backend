import { AppDataSource } from 'src/data-source';
import UserToken from '../UserToken';

export const UserRepository = AppDataSource.getRepository(UserToken).extend({
  async findByToken(token: string) {
    return this.createQueryBuilder('userToken')
      .where('userToken.token = :token', { token })
      .getOne();
  },
  async generate(user_id: string) {
    const userToken = this.create({
      user_id,
    });
    await this.save(userToken);
    return userToken;
  },
});
