import { Request, Response } from "express";
import { container } from "tsyringe";
import { z } from "zod";
import { UndeleteCustomerUseCase } from "./undeleteCustomerUseCase";



export class UndeleteCustomerController {
  async handle(req: Request, res: Response): Promise<Response> {
    const registerAgainCustomer = container.resolve(UndeleteCustomerUseCase);

    const registerAgainSchema = z.object({
      id: z.string()
    });

    const { id } = registerAgainSchema.parse(req.params);

    await registerAgainCustomer.execute(id)

    return res.status(204).send();
  }
}