import { Request, Response } from 'express';
import AddSalaryService from '../services/AddSalaryService';
import ListUserSalary from '../services/ListUserSalary';
import DeleteSalaryService from '../services/DeleteSalaryService';

export default class SalaryController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { value, payment_date } = request.body;
    const userId = request.user.id;

    const addSalaryService = new AddSalaryService();

    const salary = await addSalaryService.execute({
      userId,
      value,
      payment_date,
    });

    return response.json(salary);
  }

  public async find(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id;

    const listUserSalary = new ListUserSalary();

    const salaries = await listUserSalary.execute({ userId });

    return response.json(salaries);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteSalary = new DeleteSalaryService();

    deleteSalary.execute({ id });

    return response.json([]);
  }
}
