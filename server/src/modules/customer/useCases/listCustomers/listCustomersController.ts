import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCustomersUseCase } from "./listCustomersUseCase";



export class ListCustomersController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listCustomers = container.resolve(ListCustomersUseCase);

    const customers = await listCustomers.execute();
    
    return res.json(customers);
  }
}