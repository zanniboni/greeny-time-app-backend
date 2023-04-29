import { role } from '@prisma/client';
import { FindRoleRequest } from './FindRoleRequest';
import { IFindRoleService } from './IFindRoleService';
import { RoleRepository } from '../RoleRepository';
import AppError from '@Domain/Middlewares/Errors/AppError';

class FindRoleService implements IFindRoleService {
  private roleRepository = new RoleRepository();

  public async execute({ id }: FindRoleRequest): Promise<role> {
    const role = await this.roleRepository.findById(id);

    if (!role) {
      throw new AppError(`Role not found with id: ${id}`);
    }

    return role;
  }
}

export default FindRoleService;
