
import { z } from "zod";
import { container } from "tsyringe"

import { RegisterCustomerUseCase } from "./registerCustomerUseCase";
import { Request, Response } from "express";

export class RegisterCustomerController {
  async handle(req: Request, res: Response): Promise<Response> {
    const createRegisterCustomerUseCase = container.resolve(RegisterCustomerUseCase);
    
    const registerCustomerSchema = z.object({
      name: z.string(),
      cpf: z.string(),
      contact_number: z.string(),
      working_store: z.string()
    });

    const customer = registerCustomerSchema.parse(req.body);

    await createRegisterCustomerUseCase.execute(customer);
    return res.status(201).send();
  }
}