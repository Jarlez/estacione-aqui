import { container } from "tsyringe";
import { DeleteCustomerUseCase } from "./deleteCustomerUseCase";
import { Request, Response } from "express";
import { z } from "zod";



export class DeleteCustomerController { 
  async handle(req: Request, res: Response): Promise<Response> {
    const deleteCustomer = container.resolve(DeleteCustomerUseCase)

    const deleteCustomerSchema = z.object({
      id: z.string()
    });
    const { id } = deleteCustomerSchema.parse(req.params);

    await deleteCustomer.execute(id);

    return res.status(204).send();
  }
}