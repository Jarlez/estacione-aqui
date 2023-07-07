import { Request, Response } from "express";
import { container } from "tsyringe";
import { z } from "zod";
import { UpdateCustomerUseCase } from "./updateCustomerUseCase";



export class UpdateCustomerController {
  async handle(req: Request, res: Response): Promise<Response> {
    const updateCustomer = container.resolve(UpdateCustomerUseCase);

    const updateCustomerSchema = z.object({
      name: z.string(),
      cpf: z.string(),
      contact_number: z.string(),
      working_store: z.string(),
    });

    const { id } = req.params;
    const data = updateCustomerSchema.parse(req.body);

    await updateCustomer.execute(data, id);

    return res.status(204).send();
  }
}