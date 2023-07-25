import { Request, Response } from "express";
import { container } from "tsyringe";
import { RegisterVehicleUseCase } from "./registerVehicleUseCase";
import { z } from "zod";

export class RegisterVehicleController {
  async handle(req: Request, res: Response): Promise<Response> {
    const registerVehicle = container.resolve(RegisterVehicleUseCase);
    const registerVehicleSchema = z.object({
      brand: z.string(),
      model: z.string(),
      plate: z.string(),
      color: z.string(),
    });

    const { customer_id } = req.query;
    const vehicle = registerVehicleSchema.parse(req.body);

    await registerVehicle.execute(vehicle, customer_id as string);
    
    return res.status(201).send();
  }
}