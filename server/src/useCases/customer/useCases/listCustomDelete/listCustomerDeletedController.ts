import { Request, Response } from "express"
import { container } from "tsyringe"
import { ListCustomDeletedUseCase } from "./listCustomDeletedUseCase";
import { z } from "zod"

export class ListCustomerDeletedController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listCustomersDeleted = container.resolve(ListCustomDeletedUseCase);

    const listCustomerDeletedSchema = z.object({
      name: z.string().nullish()
    });

    const { name } = listCustomerDeletedSchema.parse(req.query);
    
    const customersDeleted = await listCustomersDeleted.execute(name as string);

    return res.json(customersDeleted);
  }
}