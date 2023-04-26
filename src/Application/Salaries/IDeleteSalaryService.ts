import { DeleteSalaryRequest } from './DeleteSalaryRequest';

export interface IDeleteSalaryService {
  execute({ id }: DeleteSalaryRequest): void;
}
