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

    const { customerId } = req.query;
    const vehicle = registerVehicleSchema.parse(req.body);

    await registerVehicle.execute(vehicle, customerId as string);
    
    return res.status(201).send();
  }
}