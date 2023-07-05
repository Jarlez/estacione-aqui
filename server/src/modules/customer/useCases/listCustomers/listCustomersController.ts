import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCustomersUseCase } from "./listCustomersUseCase";
import { z } from "zod";



export class ListCustomersController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listCustomers = container.resolve(ListCustomersUseCase);
    
    const listCustomersSchema = z.object({
      name: z.string().nullish()
    });

    const { name } = listCustomersSchema.parse(req.query);
    
    const customers = await listCustomers.execute(name as string);
    
    return res.json(customers);
  }
}