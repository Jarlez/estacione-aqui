
import { z } from "zod";
import { container } from "tsyringe"

import { RegisterCustomerUseCase } from "./registerCustomerUseCase";
import { Request, Response } from "express";

export class RegisterCustomerController {
  async handle(req: Request, res: Response): Promise<Response> {
    const registerCustomer = container.resolve(RegisterCustomerUseCase);
    
    const registerCustomerSchema = z.object({
      name: z.string(),
      cpf: z.string(),
      contact_number: z.string(),
      working_store: z.string()
    });

    const customerId = registerCustomerSchema.parse(req.body);

    await registerCustomer.execute(customerId);
    return res.status(201).send();
  }
}