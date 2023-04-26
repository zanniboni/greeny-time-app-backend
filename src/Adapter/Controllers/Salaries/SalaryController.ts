/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import AddSalaryService from '../../../Application/Salaries/AddSalaryService';
import DeleteSalaryService from 'src/Application/Salaries/DeleteSalaryService';
import ListUserSalary from 'src/Application/Salaries/ListUserSalary';
import { IBaseController } from 'src/Adapter/Controllers/IBaseController';

export default class SalaryController implements IBaseController {
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

  list(request: Request, response: Response): Promise<Response> {
    throw new Error('Method not implemented.');
  }
  update(request: Request, response: Response): Promise<Response> {
    throw new Error('Method not implemented.');
  }
}
