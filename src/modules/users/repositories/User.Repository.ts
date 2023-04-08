import { Repository } from 'typeorm';

import User from '../entities/User';

export class UserRepository extends Repository<User> {
  public async findByName(name: string): Promise<User | null> {
    const user = this.findOne({
      where: {
        name,
      },
    });
    return user;
  }

  public async findById(id: string): Promise<User | null> {
    const user = this.findOne({
      where: {
        id,
      },
    });
    return user;
  }

  public async findByEmail(email: string): Promise<User | null> {
    const user = this.findOne({
      where: {
        email,
      },
    });
    return user;
  }
}
